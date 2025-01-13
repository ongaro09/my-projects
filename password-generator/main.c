#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "generator.h"
#include "rng.h"

int main() {
    rngSeed((unsigned int)time(NULL));

    Config config;
    char password[65];

    printf("Enter password length (8–64): ");
    scanf("%d", &config.len);
    if (config.len < 8 || config.len > 64) {
        fprintf(stderr, "Invalid password length!\n");
        return 1;
    }

    printf("Include uppercase letters? (1 = yes, 0 = no): ");
    scanf("%d", &config.includeUppercase);

    printf("Include lowercase letters? (1 = yes, 0 = no): ");
    scanf("%d", &config.includeLowercase);

    printf("Include digits? (1 = yes, 0 = no): ");
    scanf("%d", &config.includeDigits);

    printf("Include symbols? (1 = yes, 0 = no): ");
    scanf("%d", &config.includeSymbols);

    printf("Easy to read? (1 = yes, 0 = no): ");
    scanf("%d", &config.easyMode);

    generatePassword(password, &config);

    if (password[0] != '\0') {
        printf("Generated password: %s\n", password);
    }

    return 0;
}

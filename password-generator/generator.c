#include <stdio.h>
#include <string.h>
#include "generator.h"
#include "rng.h"


const char uppercase[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const char lowercase[] = "abcdefghijklmnopqrstuvwxyz";
const char digits[] = "0123456789";
const char symbols[] = "!@#$%^&*()_+[]{}|;:,.<>?";
const char easyReadDigits[] = "23456789";
const char easyReadUppercase[] = "ABCDEFGHJKMNPQRSTUVWXYZ";
const char easyReadLowercase[] = "abcdefghjkmnpqrstuvwxyz";


void buildCharset(char *charset, const Config *config) {
    if (config->easyMode) {
        if (config->includeUppercase) strcat(charset, easyReadUppercase);
        if (config->includeLowercase) strcat(charset, easyReadLowercase);
        if (config->includeDigits) strcat(charset, easyReadDigits);
    } else {
        if (config->includeUppercase) strcat(charset, uppercase);
        if (config->includeLowercase) strcat(charset, lowercase);
        if (config->includeDigits) strcat(charset, digits);
    }
    if (config->includeSymbols) strcat(charset, symbols);
}


void generatePassword(char *password, const Config *config) {
    char charset[256] = "";
    buildCharset(charset, config);

    if (strlen(charset) == 0) {
        fprintf(stderr, "Error: No character types selected!\n");
        password[0] = '\0';
        return;
    }

    for (int i = 0; i < config->len; i++) {
        int index = customRng() % strlen(charset);
        password[i] = charset[index];
    }
    password[config->len] = '\0';
}

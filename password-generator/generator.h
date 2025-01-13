#ifndef GENERATOR_H
#define GENERATOR_H

typedef struct {
  int len;
  int upperCase;
  int lowerCase;
  int digits;
  int symbols;
  int easyMode;
} Config;

void generatePassword(char *passwd, const Config *config);

#endif

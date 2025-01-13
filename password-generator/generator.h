#ifndef GENERATOR_H
#define GENERATOR_H

typedef struct {
  int len;
  int includeUppercase;
  int includeLowercase;
  int includeDigits;
  int includeSymbols;
  int easyMode;
} Config;

void generatePassword(char *passwd, const Config *config);

#endif

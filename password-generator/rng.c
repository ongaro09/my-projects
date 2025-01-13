#include "rng.h"

static unsigned int state = 1;

void rngSeed(unsigned int seed) {
    state = seed;
}

unsigned int customRng() {
    state = (1664525 * state + 1013904223) % 0xFFFFFFFF;
    return state;
}

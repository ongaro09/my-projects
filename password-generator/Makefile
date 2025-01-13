# Compiler and flags
CC       = gcc
CFLAGS   = -Wall -Werror -Wextra -pedantic -std=gnu17

# Target and object files
TARGET   = main
OBJECTS  = main.o generator.o rng.o

# Default target
all: $(TARGET)

# Build the final executable
$(TARGET): $(OBJECTS)
	$(CC) $(OBJECTS) -o $(TARGET)

# Compile main.c
main.o: main.c generator.h rng.h
	$(CC) $(CFLAGS) -c main.c

# Compile generator.c
generator.o: generator.c generator.h
	$(CC) $(CFLAGS) -c generator.c

# Compile rng.c
rng.o: rng.c rng.h
	$(CC) $(CFLAGS) -c rng.c

# Clean up object files and target
clean:
	rm -f $(OBJECTS) $(TARGET)

# Build and run the executable
run: all
	./$(TARGET)

# Phony targets
.PHONY: all clean run

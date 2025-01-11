#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Error: No files specified. Usage: gyte <file1> [file2 ...]"
  exit 1
fi

for file in "$@"; do
  if [ -f "$file" ]; then
    echo "Staging file: $file"
    git add "$file"
  else
    echo "Error: File '$file' does not exist. Skipping."
  fi
done


echo "Please provide a commit message:"
read commit_message


echo "Committing changes..."
git commit -m "$commit_message"


echo "Pushing changes to GitHub..."
git push


echo "Changes pushed successfully!"

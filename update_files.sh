#!/bin/bash
# Find all files in the repository (excluding .git directory)
find . -type f -not -path "./.git/*" | while read file; do
  # Skip the script itself
  if [[ "$file" != "./update_files.sh" ]]; then
    # Add a comment at the end of each file or remove trailing whitespace
    # This makes a minimal change that won't affect functionality
    echo "" >> "$file"
    # Alternatively, you could use: sed -i '' -e 's/[ \t]*$//' "$file"
  fi
done

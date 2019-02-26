#!/bin/bash
for filename in ~/Downloads/thinChapel/*; do
    fileroot=$(echo "$filename" | cut -f 1 -d '.')
    cwebp "$filename" -q 80 -o "$fileroot"".webp" -resize 500 0 
done 

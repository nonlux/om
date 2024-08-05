#!/bin/sh

echo $1;
echo $2;
if [ $# -eq 2 ]; then
    pnpm nx $1 $2
else
    pnpm nx run-many -t $1
fi

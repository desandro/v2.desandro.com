#!/bin/bash
rsync -avz --exclude-from 'exclude.txt' ./ $BERNA:~/www
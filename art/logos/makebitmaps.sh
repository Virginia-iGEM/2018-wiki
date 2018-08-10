#!/bin/bash
inputdir=./finals
outputdir=./bitmaps

find $inputdir -type d | sed -e "s@$inputdir@$outputdir@" | xargs mkdir -p

for f in $(find $inputdir -name '*.svg' -type f); do
    temp1=${f##./finals}
    temp2=${temp1%%.svg}
    temp3=./bitmaps$temp2
    inkscape -z -e $temp3.png $f
    #echo "$temp3.png $1"
done

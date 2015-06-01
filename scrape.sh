#!/usr/bin/env bash

# download site html
curl -s http://whattheythink.com > scrape.html

# find starting line number
STARTLN=`grep -o '<ul class="frontpagenews">' -n scrape.html | awk -F ":" '{print $1}'`

# find ending line number
IFS=' ' read -a ARR <<< $(grep -o '</ul>' -n scrape.html | awk -F ":" '{print $1}')
for N in "${ARR[@]}"; do
    if [ $N -gt $STARTLN ]; then
        ENDLN=$N
        break
    fi
done

# extract data between line numbers
sed -i -n ${STARTLN},${ENDLN}p scrape.html

# add target = _blank to all links
sed -i 's/<a\ /<a\ target="_blank"\ /g' scrape.html

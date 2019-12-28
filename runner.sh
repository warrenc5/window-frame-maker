#!/bin/bash
SOURCE=window-frame-maker.js
PID=wfm.pid
cd `dirname $0`
pwd 
while [[ 1 ]]; do 
inotifywait -e modify $SOURCE
if [ -f '$PID' ] ; then
pid=`cat $PID` 
kill $pid
echo "killed $pid"
rm $PID
fi
jjs $SOURCE &
echo $$
echo $$ > $PID
done

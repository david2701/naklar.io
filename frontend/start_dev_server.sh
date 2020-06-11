#!/bin/sh
#cd /usr/src/app
npm i
./node_modules/.bin/ng serve --host "0.0.0.0" --publicHost "https://naklario-dev.berger.cf/" --disableHostCheck true

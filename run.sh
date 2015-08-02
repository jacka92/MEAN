#!/bin/bash

echo 'mongod --nojournal --dbpath=data' > mongod-start

chmod a+x mongod-start

./mongod-start

mongo rtr

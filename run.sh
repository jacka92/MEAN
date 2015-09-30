#!/bin/bash

sudo npm install

mkdir data

echo 'mongod --nojournal --dbpath=data' > mongod-start

chmod a+x mongod-start

sudo apt-get install mongodb

./mongod-start

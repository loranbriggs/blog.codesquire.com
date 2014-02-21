#!/bin/bash

echo "Deploying master branch at $(date)" >> ~/.forever/OoEI.log

git pull

forever restart OoEI

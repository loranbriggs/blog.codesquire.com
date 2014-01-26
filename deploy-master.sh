#!/bin/bash

echo "Deploying master branch at $(date)" >> ~/.forever/Ov-w.log

git pull

forever restart Ov-w

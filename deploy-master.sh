#!/bin/bash

git pull

forever restart Ov-w

echo "Deployed master branch at $(date)" >> ~/.forever/Ov-w.log

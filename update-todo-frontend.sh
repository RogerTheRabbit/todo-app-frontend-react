#!/bin/bash

wget https://github.com/RogerTheRabbit/todo-app-frontend-react/releases/latest/download/release.tar.gz
tar -xvf release.tar.gz
sudo rm -r /var/www/html/todo-app
sudo mv ./dist /var/www/html/todo-app
rm release.tar.gz

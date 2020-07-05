#! /bin/sh

# This script file install the different package and run the back-end server

# Installation of the package for the back (server node)

echo Running server side
echo ===================================================================
echo

cd ..
cd ..

# Update npm
echo Update npm
echo ====================================================================

npm install -g npm@latest

#Server part 
echo Installation of the server
echo ====================================================================
cd backend
npm install
echo 
echo Running the server
echo ====================================================================
clear
cd ..
node server.js
read -t 5 -p "I am going to wait for 5 seconds only ..."
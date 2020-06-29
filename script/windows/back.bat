:: This batch file install the different package and run the back
ECHO OFF
:: Installation of the package for the back (server node)
::----------------------------------------------------------------------
ECHO Running server side
ECHO ===================================================================
ECHO 

:: Update npm
ECHO Update npm
ECHO ====================================================================
call npm install -g npm@latest

:: Server part 
ECHO Installation of the server
ECHO ====================================================================
cd ..
cd ..
cd backend
call npm install
ECHO 
ECHO Running the server
ECHO ====================================================================
CLS
call node server.js
PAUSE
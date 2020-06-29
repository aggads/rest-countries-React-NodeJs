:: This batch file install the different package and run the front
ECHO OFF
:: Installation of the package for the front 
::----------------------------------------------------------------------
:: Front end part
ECHO Running front side
ECHO ===================================================================
ECHO 

Echo Package Installation
ECHO ====================================================================
cd ..
call npm install
ECHO Running the front
ECHO ====================================================================
call npm run start
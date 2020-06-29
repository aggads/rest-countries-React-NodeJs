:: This batch file install the different package and run the project
ECHO OFF
:: Installation of the package for the front and the back (server node)
::----------------------------------------------------------------------
cd script
cd windows


start cmd /k call back.bat
::call back.bat

::call front.bat
start cmd /k call front.bat

PAUSE
#! /bin/sh

cd script/unix
echo "Looks like your default editor is $EDITOR"

echo "If no value select one : gnome, xterm, konsole, terminal"
echo "Else, press enter"
read system

if [$system = gnome]
then
    gnome-terminal -e bash back.sh
elif [$system = xterm]
then
    xterm -e bash back.sh
elif [$system = konsole]
then
    konsole -e bash back.sh
elif [$system = terminal]
then
    terminal -e bash back.sh
else
    echo ""
    echo "----------------------------------------------------------------------------- "
    echo "if no value selected, please got to folder script/unix and run the script : back.sh"
    echo ""
fi

bash front.sh
read -t 20 -p "I am going to wait for 5 seconds only ..."
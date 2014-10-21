#!/bin/bash

if [ $UID != 0 ] ; then
	echo "Please run this script with root privilege"
	echo "请使用root权限执行此脚本"
	exit
fi

function remove_utf8_bom()
{
	file=$1
	sed -i '1 s/^\xef\xbb\xbf//' "$file"
}

desktop_files=`ls /usr/share/applications/wps-office-*.desktop`

for file in $desktop_files ; do
	remove_utf8_bom "$file"
done

echo "Job done!"

#!/bin/bash
# setup.sh will load config/setup.conf to get setup info

if [ "x$USER" != "xroot" ]; then
	sudo ./$0 "$@"
	exit 0
fi

set -e

function die()
{
	echo "Error: $@" > /dev/stderr
	exit 1
}

function config_file()
{
	sed "s/@USER@/${x_user}/g; s/@GROUP@/${x_group}/g; s/@ROOT@/${x_root}/g;" < "$1" > "$2"
}

x_user="www-data"
x_group="www-data"
x_root="/var/www"
source config/setup.conf

# check root directory
[ "x$(pwd)" == "x${x_root}" ] || die "website must be installed to ${x_root}"

# check lighttpd
which lighttpd || die "can not found lighttpd"

# stop system's lighttpd serve
/etc/init.d/lighttpd stop
update-rc.d lighttpd disable

# create own serve
update-rc.d -f lighttpd-wps-community remove 
config_file "setup/lighttpd.init" "/etc/init.d/lighttpd-wps-community"
config_file "setup/lighttpd.conf" "config/lighttpd.conf"
[ -d "log" ] || mkdir log
update-rc.d lighttpd-wps-community start 09 2 3 4 5 . stop 09 0 1 6 .
update-rc.d lighttpd-wps-community enable
/etc/init.d/lighttpd restart

# change own of /var/www
chown -R www-data:www-data /var/www


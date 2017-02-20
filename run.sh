#!/bin/bash
sudo service mysql start
sudo service apache2 start
php artisan serve --host=192.168.1.200 --port=8000

#!/bin/bash
sudo service mysql start
sudo service apache2 start
php artisan serve  --port=8000

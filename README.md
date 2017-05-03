# evt ([racingxracing.com](http://racingxracing.com))
Application for share your race event.

## Requirment
- [npm](https://www.npmjs.com/)
- [composer](https://getcomposer.org/download/)
- webserver
- mysql server

## Installation
- `git clone https://github.com/winardiaris/evt.git /var/www/html/evt`
- Navigate your virtual host to /var/www/html/evt/public
- `cd /var/www/html/evt/`
- `npm install`
- `composer install`
- `npm run production`
- `cp .env.example .env`
- `vi .env` <= setting your databases and other
- `php artisan migrate:refresh`
- `php artisan db:seed --class=AdminSeeder` <= for admin user
- `php artisan db:seed --class=DummyDataSeeder` <= Dummy data

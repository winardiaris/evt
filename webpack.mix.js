const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js');

mix.combine([
       'resources/assets/css/bootstrap.min.css',
       'resources/assets/css/main.css',
       'node_modules/bootstrap-social/bootstrap-social.css',
       'node_modules/font-awesome/css/font-awesome.min.css',
], 'public/css/all.css');
mix.copy('node_modules/font-awesome/fonts', 'public/fonts/');

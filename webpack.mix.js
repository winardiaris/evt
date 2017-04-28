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

mix.js('resources/assets/js/app.js', 'public/js')
  .combine([
    'node_modules/sweetalert/dist/sweetalert.min.js',
    'resources/assets/js/zepto.js',
    'resources/assets/js/jquery.waterfall.js',
    'resources/assets/js/main.js',
  ],'public/js/all.js')
  .combine([
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/main.css',
    'node_modules/bootstrap-social/bootstrap-social.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/sweetalert/dist/sweetalert.css'
  ], 'public/css/all.css')
  .copy('node_modules/font-awesome/fonts', 'public/fonts/');

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
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/sweetalert/dist/sweetalert.min.js',
    'resources/assets/js/bootstrap-tagsinput.min.js',
    'resources/assets/js/zepto.js',
    'resources/assets/js/jquery.waterfall.js',
    'resources/assets/js/sortable.min.js',
    'resources/assets/js/fileinput.min.js',
    'resources/assets/js/theme.min.js',
    'node_modules/moment/min/moment.min.js',
    'resources/assets/js/bootstrap-datetimepicker.js',
  ],'public/js/static.js')
  .combine([
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/bootstrap-datetimepicker.min.css',
    'resources/assets/css/bootstrap-tagsinput.css',
    'node_modules/bootstrap-social/bootstrap-social.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/sweetalert/dist/sweetalert.css',
    'resources/assets/css/fileinput.min.css',
    'resources/assets/css/theme.min.css',
    'resources/assets/css/main.css',
  ], 'public/css/all.css')
  .copy('node_modules/font-awesome/fonts', 'public/fonts/')
  .copy('resources/assets/js/main.js', 'public/js/');

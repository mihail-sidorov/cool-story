const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'js')
   .sass('resources/sass/app.scss', 'css')
   .copyDirectory('resources/libraries/js', 'js/libraries')
   .copyDirectory('resources/libraries/css', 'css/libraries')
   .copyDirectory('resources/font', 'font')
   .options({
      processCssUrls: false,
   })
   .browserSync({
      proxy: '192.168.1.5',
      files: [
         'css/{*,**/*}.css',
         'js/{*,**/*}.js',
         '{*,**/*}.html',
      ],
   });
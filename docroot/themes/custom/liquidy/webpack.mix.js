let mix = require("laravel-mix");
// EDIT THEME NAME
// var themename = "liquidy";
// Path to Theme
// const themePath = "docroot/themes/" + themename + "";
// Path to 'Raw' Source files
// /web/themes/THEME_NAME/src
// const resources = "/src";
// auto-prefixer for last 2 versions and safari >8 - Bootstrap 4 requires
mix.options({
  postCss: [
    require("autoprefixer")({
      remove: false,
      browsers: ["last 2 versions", "safari >= 8"]
    })
  ]
});
// /web/themes/THEME_NAME/src/scss/app.css  TO  /web/themes/THEME_NAME/css/app.css
// mix
//   .sass(`${resources}/style/scss/main.scss`, `${themePath}/style/css`, {
//     includePaths: ["node_modules"],
//   })
//   .sourceMaps();
// // /web/themes/THEME_NAME/src/js/app.js  TO  /web/themes/THEME_NAME/js/app.js
// mix.js(`${resources}/js/app.js`, `${themePath}/js`);

mix
  // .js("js/app.js", "js/app.js")
  .sass("style/scss/liquidy.scss", "style/css/main.css");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// mix
//   .js("src/liquidy.js", "js/liquidy.js")
//   .sass("src/liquidy.scss", "style/css/main.css");

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });

/**
 * Entry Script
 */

require('babel-register')({
  "plugins": [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./webpack.config.babel.js",
        "verbose": false
      }
    ]
  ]
});
require('babel-polyfill');

console.log('Server is starting...')

require('./server/server');

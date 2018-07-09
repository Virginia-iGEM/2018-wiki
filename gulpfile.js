var gulp = require('igem-wikibrick/gulpfile');
var hub = require('gulp-hub');
var path = require('path');

global.wikibrick = require('./config')(path.resolve(__dirname)); // Pass in local directory name

var config = global.wikibrick;

//console.log(config.browsersync.development.server);
var path = require('path'); // Need path to to absolutify dirname

// Pass in local directory name, needed for configuration generation
// for igem-wikibrick. This same configuration file is made a global
// variable, so you can use it in your own gulp tasks.
global.wikibrick = require('./config')(path.resolve(__dirname)); 
// Require gulp from the igem-wikibrick module
// Pass in configuration
var gulp = require('igem-wikibrick/gulp/gulpfile')(global.wikibrick); 
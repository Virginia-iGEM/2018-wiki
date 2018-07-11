var gulp = require('igem-wikibrick/gulpfile'); // Require gulp from the igem-wikibrick module
var path = require('path'); // Need path to to absolutify dirname

// Pass in local directory name, needed for configuration generation
// for igem-wikibrick. This same configuration file is made a global
// variable, so you can use it in your own gulp tasks.
global.wikibrick = require('./config')(path.resolve(__dirname)); 
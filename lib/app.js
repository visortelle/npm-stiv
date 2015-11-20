module.exports = function(execDir){
    var fs = require('fs');
    var backup = require('./backup.js');
    var packageParser = require('./package-parser.js');
    var yargs = require('yargs')
        .alias('t', 'target')
        .default('target', `${execDir}/package.json`)
        .argv;
    var pathToPackageFile = yargs.target;

    backup.make(pathToPackageFile);
    packageParser.parse(pathToPackageFile);
}

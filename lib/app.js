module.exports = function(execDir){
    var fs = require('fs');
    // var backup = require('./backup.js');
    var packageParser = require('./package-parser.js');
    var yargs = require('yargs')
        .alias('t', 'target')
        .default('target', `${execDir}/testfiles/package.json`)
        .argv;
    var targetPath = yargs.target;

    // backup.make(yargs.t);
    packageParser.parse(targetPath);
}

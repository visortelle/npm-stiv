var fs = require('fs');
var path = require('path');

var make = function(src, dest){
    var backupPrefix = 'bck_';
    if(dest === undefined){
        var dest = path.dirname(src) + '/' + backupPrefix + "/" path.basename(src);
    }
    console.log(`src=${src} dest=${dest}`)

    fs.createReadStream(src).pipe(fs.createWriteStream(dest));
}

module.exports.make = make;

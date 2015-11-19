var fs = require('fs');

var parse = function(targetPath){
    var targetText = fs.readFile(targetPath, 'utf-8', (err, data) => {targetTextHandler(data)});

}

var targetTextHandler = function(data){
        var packageJSON = JSON.parse(data);
        var depsJSON = packageJSON.dependencies;
        for (dep in depsJSON){
            if(depsJSON[dep] !== '*'){
                console.log(dep, depsJSON[dep]);
            }
        }
}
var handleDependency(depName){

}


module.exports.parse = parse;

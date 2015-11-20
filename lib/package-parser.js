var fs = require('fs');
var path = require('path');


var parse = function(pathToPackageFile){
    var pathToDeps = `${path.dirname(pathToPackageFile)}/node_modules`;
    console.log(pathToPackageFile)

    fs.readFile(pathToPackageFile, 'utf-8', (err, fileContent) => {
        var packageJSON = JSON.parse(fileContent);

        if(packageJSON.dependencies !== undefined){
            var modifiedDepsJSON = modifyDepsJSON(packageJSON, pathToDeps, 'dependencies');
            packageJSON.dependencies = modifiedDepsJSON;
        }
        if(packageJSON.devDependencies !== undefined){
            var modifiedDevDepsJSON = modifyDepsJSON(packageJSON, pathToDeps, 'devDependencies');
            packageJSON.devDependencies = modifiedDevDepsJSON;
        }

        console.log(packageJSON)
        var resultJSONstr = JSON.stringify(packageJSON, null, 4);
        fs.writeFile(pathToPackageFile, resultJSONstr, (err) => {

        });
    });
}


var modifyDepsJSON = function(packageJSON, pathToDeps, depsObjName){
        var depsJSON = packageJSON[depsObjName];

        for (dep in depsJSON){
            if(depsJSON[dep] === '*'){
                var depName = dep;
                var pathToDep = `${pathToDeps}/${dep}`;
                var depVersion = findDepVersionByPath(pathToDep);
                depsJSON[dep] = depVersion;
            }
        }

        return depsJSON;
}

var findDepVersionByPath = function(pathToDep){
    var packageFilePath = `${pathToDep}/package.json`;
    var depVersion;
    var fileContent = fs.readFileSync(packageFilePath, 'utf-8')
   var packageJSON = JSON.parse(fileContent);
   depVersion = packageJSON.version;

   return depVersion;
}

module.exports.parse = parse;

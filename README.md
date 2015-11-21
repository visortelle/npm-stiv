# npm-stiv
## Stars To Installed Versions

Converts stars(asterisks) in package.json's deps to installed versions. 
###Installation 
```bash
npm install -g npm-stiv
```

###Example: 
You have a package.json file:

```json
{
  "name": "visortelle",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "*",
    "babel-preset-es2015": "*",
    "babel-preset-react": "^6.1.18",
    "babelify": "*",
    "browser-sync": "*",
    "gulp": "*",
    "gulp-browserify": "^0.5.1",
    "gulp-imagemin": "*"
  }
}
```

```bash
npm install
```

```bash
npm-stiv
```
1. It creates backup **bck_package.json** file. 
2. **npm-stiv** detects current installed deps versions and modify original package.json file:

```json
{
  "name": "visortelle",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "6.1.0",
    "babel-preset-es2015": "6.1.18",
    "babel-preset-react": "^6.1.18",
    "babelify": "7.2.0",
    "browser-sync": "2.10.0",
    "gulp": "3.9.0",
    "gulp-browserify": "^0.5.1",
    "gulp-imagemin": "2.4.0"
  }
}
```



'use strict'

const fs = require('fs')

const cdn = require('../../cdn.config')

function addVersionForStaticSource(opt){
	this.rootPath = cdn.CDN_PATH
}

addVersionForStaticSource.prototype.apply = function(compiler){
	compiler.plugin('done', params => {
        Object.keys(params.compilation.assets)
        .filter(name => name.includes('.js') && !name.includes('.js.map'))
        .forEach(name => {
        	// console.log(`${this.rootPath}/${name}`)
            /*fs.readFile(`${this.rootPath}/${name}`, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    const newBundle = data
                        .toString()
                        .replace(/(__webpack_require__.p=\"\")|(__webpack_require__.p = \"\")/g, `__webpack_require__.p = ${this.publicPath}`);
                    fs.writeFile(`${this.rootPath}/${name}`, newBundle, err => {
                        if (err) throw err
                    });
                }
            });*/
        });
    });
}

module.exports = addVersionForStaticSource
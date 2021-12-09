'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');

module.exports = function renderScripts() {
    const sourcePathScriptsJS = upath.resolve(upath.dirname(__filename), '../src/js/scripts.js');

    const copyright = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
`
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

    fs.writeFileSync(sourcePathScriptsJS, copyright + scriptsJS);
};
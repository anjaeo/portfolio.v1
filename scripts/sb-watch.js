'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const upath = require('upath');

const watcher = chokidar.watch('src', {
    persistent: true,
});

let READY = false;

process.stdout.write('Loading');

watcher.on('add', filePath => _processFile(upath.normalize(filePath), 'add'));
watcher.on('change', filePath => _processFile(upath.normalize(filePath), 'change'));
watcher.on('ready', () => {
    READY = true;
    console.log(' READY TO ROLL!');
});

function _processFile(filePath, watchEvent) {
    console.log(`### INFO: File event: ${watchEvent}: ${filePath}`);
}
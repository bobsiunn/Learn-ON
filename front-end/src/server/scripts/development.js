process.env.NODE_ENV = 'development';

let development = require('nodemon');
development('--exec babel-node --presets=es2015 ./src/server/main.js --watch ./src');

development.on('start', function(){
    console.log('[development] App has started');
}).on('quit', function(){
    console.log('[development] App has quit');
    process.exit();
}).on('restart', function(files){
    console.log('[development] App restarted due to:', files);
});
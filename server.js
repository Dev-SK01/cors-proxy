var port = process.env.PORT || 8080;
var cors_proxy = require('cors-anywhere');

// creating cors proxy server
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, function() {
    console.log('Running CORS Anywhere on localhost: ' + ':' + port);
});
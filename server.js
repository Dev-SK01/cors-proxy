var port = process.env.PORT || 9000;
var cors_proxy = require('cors-anywhere');

// creating cors proxy server
cors_proxy.createServer({
    originWhitelist: ["https://agri-lynx-git-test-devsk001s-projects.vercel.app","http://localhost:8080","https://agri-lynx-web.app"], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, function() {
    console.log('Running CORS Anywhere on localhost: ' + ':' + port);
});
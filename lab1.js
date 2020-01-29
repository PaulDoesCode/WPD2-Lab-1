var http = require('http');

http.createServer(function(req, res) {
    // the replace function removes any query strings and slashes
    // the toLowerCase functions makes it lower case 
    path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<p>Homepage</p>');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<p>About</p>');
            break;
        case '/products':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<p>Products</p>');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<p>Not Found</p>');
            break;
    }
}).listen(8000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
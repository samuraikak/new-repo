const http = require('http');

const server = http.createServer((req, res)=> {
    // res.write('Welcome to my first server');
    // res.end()

    if(req.url === '/') {
        res.end('Welcome to the home page')
    }

    if(req.url === '/about') {
        res.end('This is the about page')
    }
    res.end('<h1>Oops</h1> <p>Page couldnt be found</p>')
})

server.listen(5000);
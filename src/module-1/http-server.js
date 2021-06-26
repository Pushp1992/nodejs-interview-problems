const http = require('http');

const hostname = '127.0.0.1';

const PORT = 4000;

// Template 1 - user story 1

// Currently running this file will give 'ReferenceError: server is not defined'
// Please fix the issue

// TODO: Write your code starting from below line


server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`)
});
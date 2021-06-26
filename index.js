const fs = require('fs');

fs.readFile('intro.txt', 'utf8', (err, data) => {
    console.log(data);
});
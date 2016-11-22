var fs = require('fs');

fs.createReadStream('api.js').pipe(fs.createWriteStream('pipe_api.js'));

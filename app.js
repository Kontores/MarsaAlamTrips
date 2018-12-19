const express = require('express');
const config = require('./config');
const app = express();

app.get('*', function(request, response){
   response.end("hello from express!");
});

app.listen(config.port);
console.log(`application started to listen on port ${config.port}`);

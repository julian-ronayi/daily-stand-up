require('dotenv').config();
// Core modules
const http = require('http');
const fs = require('fs');
// Utils
const synchWithTrello = require('./utils/trello');
const returnHTMLtempate = require('./public/index');
const say = require('say');
const {FILE_NAME} = require('./config');
synchWithTrello();
// Server
http.createServer(function (req, res) {
  fs.readFile(FILE_NAME, function (err, data) {
    if (err) throw err;

    const parsedData = JSON.parse(data);
    const template = returnHTMLtempate(parsedData.content);

    res.end(template);
  })
}).listen(3000, () => console.log('Listening port 3000'));

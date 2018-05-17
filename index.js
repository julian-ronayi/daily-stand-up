require('dotenv').config();
// Core modules
const http = require('http');
const fs = require('fs');
// Utils
const synchWithTrello = require('./utils/trello');
const returnHTMLtempate = require('./public/index');
const {FILE_NAME} = require('./config');
// Start job before daily standup
// Server
http.createServer(function (req, res) {
  if (req.url === '/update') {
    synchWithTrello();
    res.end('success');
  };

  fs.readFile(FILE_NAME, function (err, data) {
    if (err) {
      res.end('No file');
    } else {
      const parsedData = JSON.parse(data);
      const template = returnHTMLtempate(parsedData.content);

      res.end(template);
    }

  })
}).listen(3000, () => console.log('Listening port 3000'));

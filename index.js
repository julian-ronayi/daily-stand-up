require('dotenv').config();
// Core modules
const http = require('http');
const fs = require('fs');
// Jobs
const { CronJob } = require('cron');
// Utils
const synchWithTrello = require('./utils/trello');
const returnHTMLtempate = require('./public/index');
const {FILE_NAME} = require('./config');
// Start job before daily standup
const syncTrelloJob = new CronJob({
  cronTime: '00 00 10 * * *',
  onTick: synchWithTrello,
  start: true,
  timeZone: 'Europe/Kiev'
});

syncTrelloJob.start();
// Server
http.createServer(function (req, res) {
  fs.readFile(FILE_NAME, function (err, data) {
    if (err) throw err;

    const parsedData = JSON.parse(data);
    const template = returnHTMLtempate(parsedData.content);

    res.end(template);
  })
}).listen(3000, () => console.log('Listening port 3000'));

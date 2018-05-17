const Trello = require('trello');
const fs = require('fs');
// Importing util functions
const {getTodayTemplate} = require('./templates');
const {getYesterdayTemplate} = require('./templates');
const {reduceLists, getMyCards} = require('./listUtils');
// Config
const {TRELLO_BOARD, FILE_NAME} = require('../config');
// Intitialization
const app = new Trello(process.env.API_KEY, process.env.USER_TOKEN);

const writeDataToFile = ({ qaCards, sprintCards }) => {
  const yesterdayText = getYesterdayTemplate(qaCards);
  const todayText = getTodayTemplate(sprintCards);

  const content = {
    content: `${yesterdayText}<br/><br/>${todayText}`
  };

  fs.writeFile(FILE_NAME, JSON.stringify(content, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

const synchWithTrello = () => {
  app.getListsOnBoard(TRELLO_BOARD)
    .then((lists) => {
      return reduceLists(lists)
    })
    .then(({ qaList, sprintList }) => {
      const cardRequests = [
        app.getCardsOnList(qaList),
        app.getCardsOnList(sprintList)
      ];

      Promise.all(cardRequests)
        .then(cardsData => {
          const qaCards = getMyCards(cardsData[0]);
          const sprintCards = getMyCards(cardsData[1]);

          return { qaCards, sprintCards };
        })
        .then((cards) => writeDataToFile(cards))
    });
}

module.exports = synchWithTrello;

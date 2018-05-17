// require('dotenv').config();
//
// const say = require('say');
// const Trello = require('trello');
// const app = new Trello(process.env.API_KEY, process.env.USER_TOKEN);
//
// const READY_TO_QA = 'ready to QA';
// const SPRINT_COLUMN = 'Sprint';
//
// const USER_ID = process.env.USER_ID;
// const TRELLO_BOARD = 'XNW2hcQp';
//
// const getMyCards = (cards) => {
//   return cards.reduce((prevArray, nextCard) => {
//     if (nextCard.idMembers.indexOf(USER_ID) !== -1) {
//       prevArray.push(nextCard.name);
//     };
//
//     return prevArray;
//   }, []);
// };
//
// const getYesterdayTemplate = (cards) => {
//   const cardsText = cards.reduce((prevText, nextCard, index) => {
//     return `${prevText}${index + 1}. ${nextCard}\n`
//   }, '');
//
//   return `Yesterday I did ${cards.length} tasks:\n${cardsText}`;
// };
//
// const getTodayTemplate = (cards) => {
//   const cardsText = cards.reduce((prevText, nextCard, index) => {
//     return `${prevText}${nextCard} or\n`
//   }, '');
//
//   return `Today I will do :\n${cardsText}`;
// }
//
// app.getListsOnBoard(TRELLO_BOARD)
//   .then((lists) => {
//     const myLists = lists.reduce((listObj, nextList) => {
//       if (nextList.name === READY_TO_QA) {
//         listObj.qaList = nextList.id
//       }
//
//       if (nextList.name === SPRINT_COLUMN) {
//         listObj.sprintList = nextList.id
//       }
//
//       return listObj
//     }, {})
//
//     return myLists
//   })
//   .then(({ qaList, sprintList }) => {
//     const cardRequests = [
//       app.getCardsOnList(qaList),
//       app.getCardsOnList(sprintList)
//     ];
//
//     Promise.all(cardRequests)
//       .then(cardsData => {
//         const qaCards = getMyCards(cardsData[0]);
//         const sprintCards = getMyCards(cardsData[1]);
//
//         return { qaCards, sprintCards };
//       })
//       .then(({ qaCards, sprintCards }) => {
//           const yesterdayText = getYesterdayTemplate(qaCards);
//           const todayText = getTodayTemplate(sprintCards);
//
//           console.log(yesterdayText);
//           console.log(todayText);
//       })
//   });
const http = require('http');
const fs = require('fs');

const returnHTMLtempate = require('./public/index');

http.createServer(function (req, res) {
  fs.readFile('./data.json', function (err, data) {
    if (err) throw err;

    const parsedData = JSON.parse(data);
    const template = returnHTMLtempate(parsedData.content);

    res.end(template);
  })
}).listen(3000, () => console.log('Listening port 3000'));

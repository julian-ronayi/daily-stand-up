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

http.createServer(function (req, res) {
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
      body {
        background-color: #eee;
        color: #494949;
        font-family: Arial, sans-serif;
      }
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .title, .content, .profilePic {
        padding: 2rem;
      }
      .title {
        text-align: center;
        text-transform: uppercase;
        font-weight: 200;
      }
      .content {
        font-size: 1.35em;
      }
      .profilePic img {
        display: block;
        border-radius: 50%;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="title">
        <h1>Hello, my name is Julian</h1>
      </div>
      <div class="profilePic">
        <img src="https://avatars0.githubusercontent.com/u/2480604?s=460&v=4"/>
      </div>
      <div class="content">
        <p>
          Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
        </p>
      </div>
    </div>
  </body>
  </html>
`)
}).listen(3000);

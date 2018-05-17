const {
  READY_TO_QA,
  SPRINT_COLUMN,
  USER_ID,
} = require('../config');

const reduceLists = (lists) => {
  const myLists = lists.reduce((listObj, nextList) => {
    if (nextList.name === READY_TO_QA) {
      listObj.qaList = nextList.id
    }

    if (nextList.name === SPRINT_COLUMN) {
      listObj.sprintList = nextList.id
    }

    return listObj
  }, {})

  return myLists
};

const getMyCards = (cards) => {
  return cards.reduce((prevArray, nextCard) => {
    if (nextCard.idMembers.indexOf(USER_ID) !== -1) {
      prevArray.push(nextCard.name);
    };

    return prevArray;
  }, []);
};

module.exports = {
  reduceLists,
  getMyCards
};

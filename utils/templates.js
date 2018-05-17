const getYesterdayTemplate = (cards) => {
  const cardsText = cards.reduce((prevText, nextCard, index) => {
    return `${prevText}${index + 1}. ${nextCard}</br>`
  }, '');

  return `Yesterday I did ${cards.length} tasks:</br>${cardsText}`;
};

const getTodayTemplate = (cards) => {
  const cardsText = cards.reduce((prevText, nextCard, index) => {
    return `${prevText}${nextCard} or<br/>`
  }, '');

  return `Today I will do :<br>${cardsText}`;
};

module.exports = {
  getYesterdayTemplate,
  getTodayTemplate
};

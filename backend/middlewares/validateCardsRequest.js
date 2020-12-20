const { celebrate, Joi } = require('celebrate');

const validateCardsRequest = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().uri(),
  }).unknown(true),
});

module.exports = validateCardsRequest;

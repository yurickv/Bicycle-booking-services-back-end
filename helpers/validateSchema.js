const Joi = require("joi");

const validSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  color: Joi.string().required(),
  wheel: Joi.string().required(),
  price: Joi.string().required(),
  number: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string(),
});

module.exports = validSchema;

//Validation
const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const userValidate = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });
  return userValidate.validate(data);
};

const loginValidation = (data) => {
  const userValidate = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });
  return userValidate.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

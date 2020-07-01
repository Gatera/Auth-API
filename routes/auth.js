const router = require("express").Router();
const User = require("../model/User");

//Validation
const Joi = require("@hapi/joi");

const userValidate = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});

router.post("/register", async (req, res) => {
  //Validate data before creating user
  const { error } = userValidate.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

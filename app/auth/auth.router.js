const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/token", (req, res) => {
  const { error, value } = Joi.object({
    phoneNumber: Joi.string().required(),
    username: Joi.string().required(),
  });
  if (error) return res.json({ message: "Unauthenticated..." });

  const token = jwt.sign({ value }, process.env.APP_SECRET);
  return res.json({ token });
});

module.exports = router;

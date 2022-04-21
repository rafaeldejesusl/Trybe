const express = require('express');
const router = require('express').Router();
const {
  usernameVerification,
  emailVerification,
  passwordVerification
} = require('../middlewares/verificationMiddleware');

router.post(
  '/register',
  usernameVerification,
  emailVerification,
  passwordVerification,
  (req, res) => {
    return res.status(201).json({ message: 'user created' });
  }
);

router.post(
  '/login',
  emailVerification,
  passwordVerification,
  (req, res) => {
    return res.status(200).json({ token: '86567349784e' });
  }
);

module.exports = router;

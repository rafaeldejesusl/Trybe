const express = require('express');
const router = require('express').Router();
const axios = require('axios');
const { tokenVerification } = require('../middlewares/verificationMiddleware');

router.get('/price', tokenVerification, async (req, res) => {
  try {
    const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;

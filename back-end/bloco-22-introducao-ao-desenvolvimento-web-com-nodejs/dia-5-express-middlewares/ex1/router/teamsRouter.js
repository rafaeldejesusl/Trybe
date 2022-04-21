const express = require('express');
const router = require('express').Router();
const fs = require('fs');
const {
  nameVerification,
  initialsVerification,
  countryVerification
} = require('../middlewares/verificationMiddleware');

router.post('/',
nameVerification,
initialsVerification,
countryVerification,
(req, res) => {
  const { name, initials, country, league } = req.body;
  const obj = { name, initials, country, league };
  const data = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
  const newData = [...data, obj];
  fs.writeFileSync('./teams.json', JSON.stringify(newData));
  return res.status(201).json(newData);
});

router.get('/', (req, res) => {
  const teams = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
  if(teams.length === 0) return res.status(200).json({ 'teams': teams });
  return res.status(200).json({ 'teams': teams });
});

module.exports = router;

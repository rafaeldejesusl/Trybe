const express = require('express');
const router = require('express').Router();

const allPosts = { 'posts': [
  { id: 1, post: 'burundi' },
  { id: 2, post: 'brunei' },
  { id: 3, post: 'palau' }
]};

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = allPosts.posts.find((e) => e.id === Number(id));
  if(!post) return res.status(404).json({ message: 'post not found' });
  return res.status(200).json(post); 
});

router.get('/', (req, res) => {
  if(allPosts.posts.length === 0) return res.status(200).json({ 'posts': [] });
  return res.status(200).json(allPosts);
});

module.exports = router;

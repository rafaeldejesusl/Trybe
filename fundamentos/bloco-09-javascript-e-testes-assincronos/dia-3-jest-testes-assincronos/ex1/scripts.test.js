// githubApi.test.js
const fetch = require('../node_modules/node-fetch');
const { test, expect } = require('@jest/globals');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

test('Verifica se encontra o to do list project', async () => {
  const response = await getRepos('https://api.github.com/orgs/tryber/repos');
  const repository = 'sd-01-week4-5-project-todo-list';
  expect(response).toContain(repository);
});

test('Verifica se encontra o meme generator project', async () => {
  const response = await getRepos('https://api.github.com/orgs/tryber/repos');
  const repository = 'sd-04-block5-project-meme-generator-tests';
  expect(response).toContain(repository);
});
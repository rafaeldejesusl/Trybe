const connection = require('./connection');

const serialize = (authorData) => ({
	id: authorData.id,
	title: authorData.title,
	directedBy: authorData.directed_by,
	releaseYear: authorData.release_year,
});

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const find = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM model_example.movies WHERE id=?",
    [id]
  );

  return result.map(serialize)[0];
}

module.exports = {
  create,
  find
};
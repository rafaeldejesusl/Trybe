const connection = require('./connection');

const validator = (input, min) => {
  if (!input) return false;
  if (min && input.length < min) return false;

  return true;
}

const serialize = (users) => ({
  id: users.id,
  firstName: users.first_name,
  lastName: users.last_name,
  email: users.email,
  password: users.password,
});

const createUser = async (firstName, lastName, email, password) => {
  const [result] = await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
  return { id: result.insertId, firstName, lastName, email };
}

const getUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users_crud.users;'
  );
  return users.map(serialize);
}

const getUser = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id=?;',
    [id],
  );
  return user.map(serialize);
}

const updateUser = async (id, firstName, lastName, email, password) => {
  const [result] = await connection.execute(
    'UPDATE users_crud.users SET first_name=?, last_name=?, email=?, password=? WHERE id=?',
    [firstName, lastName, email, password, id],
  );
  if (result.affectedRows === 0) return null;
  return { id: Number(id), firstName, lastName, email };
}

module.exports = {
  validator,
  createUser,
  getUsers,
  getUser,
  updateUser,
};

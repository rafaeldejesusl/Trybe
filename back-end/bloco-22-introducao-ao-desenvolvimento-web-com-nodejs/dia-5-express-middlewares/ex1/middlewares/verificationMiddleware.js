const ERROR = { status: 400, message: 'invalid data' };

const usernameVerification = (req, res, next) => {
  const { username } = req.body;
  if(!username || username.length <= 3) next(ERROR);
  next();
};

const emailVerification = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  if(!email || !emailRegex.test(email)) next(ERROR);
  next();
};

const passwordVerification = (req, res, next) => {
  const { password } = req.body;
  if(!password || password.length < 4 || password.length > 8) next(ERROR);
  next();
};

const tokenVerification = (req, res, next) => {
  const { authorization: token } = req.headers;
  const tokenRegex = /^[a-zA-Z0-9]{12}$/;
  if(!token || !tokenRegex.test(token)) next({ status: 401, message: 'invalid token' });
  next();
};

const nameVerification = (req, res, next) => {
  const { name } = req.body;
  if(!name || name.length <= 5) return next(ERROR);
  next();
};

const initialsVerification = (req, res, next) => {
  const { initials } = req.body;
  if(!initials || initials.length > 3 || initials !== initials.toUpperCase()) return next(ERROR);
  next();
};

const countryVerification = (req, res, next) => {
  const { country } = req.body;
  if(!country || country.length <= 3) return next(ERROR);
  next();
}

module.exports = { usernameVerification,
  emailVerification,
  passwordVerification,
  tokenVerification,
  nameVerification,
  initialsVerification,
  countryVerification
};

const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const stringUppercase = (string) => {
  return string.toUpperCase();
}

const stringFirstLetter = (string) => {
  return string[0];
}

const stringConcat = (s1, s2) => {
  return s1 + s2;
}

module.exports = { randomNumber, stringUppercase, stringFirstLetter, stringConcat };
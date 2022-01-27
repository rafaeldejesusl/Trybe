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

const fetchDog = async () => {
  const requisition = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await requisition.json();
  return data;
}

module.exports = { randomNumber, stringUppercase, stringFirstLetter, stringConcat, fetchDog };
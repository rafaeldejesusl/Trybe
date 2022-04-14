const fs = require('fs').promises;

const func1 = async () => {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const promises = [];
  array.forEach((e, index) => {
    promises.push(fs.writeFile(`./file${index + 1}.txt`, e));
  })
  await Promise.all(promises);
};

// func1();

const func2 = async () => {
  const promises = [];
  for (let i = 1; i < 6; i++) {
    promises.push(fs.readFile(`./file${i}.txt`, 'utf-8'));
  }
  const array = await Promise.all(promises);
  const string = array.join(' ');
  await fs.writeFile('./fileAll.txt', string);
};

func2();
const fs = require('fs').promises;

const func1 = async () => {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(result);
    data.forEach(e => console.log(`${e.id} - ${e.name}`));
  } catch (error) {
    console.log(`erro: ${error.message}`);
  }
};

// func1();

const func2 = (id) => {
  return new Promise(async (resolve, reject) => {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(result);
    const character = data.find(e => e.id === id);
    if(!character) reject(new Error('id não encontrado'));
    else resolve(character);
  })
};

const func3 = async () => {
  try {
    const result = await func2("3");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

// func3();

const func4 = async () => {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const data = await JSON.parse(result);
    const filteredData = data.filter((e) => e.id !== '10' && e.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
  } catch (error) {
    console.log(error.message);
  }
}

// func4();

const func5 = async () => {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const data = await JSON.parse(result);
    const filteredData = data.filter((e) => Number(e.id) <= 4);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(filteredData));
  } catch (error) {
    console.log(error.message);
  }
}

// func5();

const func6 = async () => {
  try {
    const result = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const data = await JSON.parse(result);
    data.push({id: '5', name: 'Nelson Muntz'});
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
}

// func6();

const func7 = async () => {
  try {
    const result = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const data = await JSON.parse(result);
    data.splice(4, 1, {id: '5', name: 'Maggie Simpson'})
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
}

func7();
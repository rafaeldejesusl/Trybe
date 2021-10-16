function biggestValue(array){
  let value = array[0];
  let index = 0;
  for(let i in array){
    if (array[i] > value){
      value = array[i];
      index = i;
    }
  }
  console.log(index)
}
function smallestValue(array){
  let value = array[0];
  let index = 0;
  for(let i in array){
    if (array[i] < value){
      value = array[i];
      index = i;
    }
  }
  console.log(index)
}
function biggestName(array){
  let name = array[0];
  for(let i of array){
    if (i.length > name.length){
      name = i;
    }
  }
  console.log(name);
}
function repetition(array){
  let value = 0;
  let repValue = 0;
  let repAtual = 0;
  for(let i = 0; i <= array.length; i += 1){
    let check = array[i];
    for(let j = 0; j <= array.length; j += 1){
      if (check === array[j]){
        repAtual += 1;
      }
    }
    if(repAtual > repValue){
      repValue = repAtual;
      value = array[i];
    }
    repAtual = 0;
  }
  console.log(value);
}
function sum(numero){
  let total = 0;
  for(let i = 0; i <= numero; i += 1){
    total = total + i;
  }
  console.log(total);
}
function final(word,ending){
  let check = true;
  for(let i = 0; i <= ending.length; i += 1){
    if(word[word.length - i] === ending[ending.length - i]){
      continue
    } else {
      check = false;
      break
    }
  }
  console.log(check)
}
biggestValue([2, 3, 6, 7, 10, 1])
smallestValue([2, 4, 6, 7, 10, 0, -3])
biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
repetition([2, 3, 2, 5, 8, 2, 3])
sum(5)
final('trybe','be')
function arrayOfNumbers(param){
  let par = [];
  for(let i = 0; i < param.length; i += 1){
    let atual = param[i];
    for(let j = 0; j < atual.length; j += 1){
      if(atual[j] % 2 === 0){
        par.push(atual[j]);
      }
    }
  }
  console.log(par);
}
let vector = [[1, 2], [3,4,5,6], [7,8,9, 10]];
arrayOfNumbers(vector)
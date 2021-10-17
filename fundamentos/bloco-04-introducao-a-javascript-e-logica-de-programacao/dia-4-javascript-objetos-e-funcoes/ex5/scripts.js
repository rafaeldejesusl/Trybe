const numerosRomanos = {
  i : 1,
  v : 5,
  x : 10,
  l : 50,
  c : 100,
  d : 500,
  m : 1000,
};
function conversor(string){
  string = string.toLowerCase();
  const len = string.length;
  let atual = numerosRomanos[string[len - 1]];
  let sum = numerosRomanos[string[len - 1]];
  for(let i = len - 2; i >= 0; i -= 1){
    let prox = numerosRomanos[string[i]];
    if(atual <= prox){
      sum += prox;
    } else {
      sum -= prox;
    }
    atual = prox;
  }
  console.log(sum);
}
conversor("MMXVIII")
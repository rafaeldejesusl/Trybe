let n = 7;
let div = 0;
for (let i = 1; i <= n; i += 1){
  if (n % i == 0){
    div = div + 1;
  }
}
if (div <= 2){
  console.log("É número primo");
}
else {
  console.log("Não é número primo");
}
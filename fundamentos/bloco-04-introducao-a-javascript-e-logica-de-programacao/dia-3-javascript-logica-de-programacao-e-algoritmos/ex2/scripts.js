let n = 5;
let matriz =[];
for (let a = 0; a < n; a += 1){
  matriz[a]="";
  for (let b = 0; b <= a; b += 1){
    matriz[a] = matriz[a] + "*";
  }
  console.log(matriz[a]);
}
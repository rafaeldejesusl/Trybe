let n = 5;
let matriz =[];
for (let a = 0; a < n; a += 1){
  matriz[a]="";
  for (let b = 0; b < n; b += 1){
    if (b < n - a - 1){
      matriz[a] = matriz[a] + " ";
    }
    else if (b >= n - a - 1) {
      matriz[a] = matriz[a] + "*";
    }
  }
  console.log(matriz[a]);
}
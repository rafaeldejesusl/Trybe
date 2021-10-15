let n = 5;
let matriz =[];
let c = n - n / 2 - 0.5;
for (let a = 0; a <= c; a += 1){
  matriz[a]="";
  for (let b = 0; b < n; b += 1){
    if(b >= c - a && b <= c + a){
      matriz[a] = matriz[a] + "*";
    }
    else {
      matriz[a] = matriz[a] + " ";
    }
  }
  console.log(matriz[a]);
}
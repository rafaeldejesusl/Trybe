//Exemplo 2
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";
console.log(info);
console.log("_____________");
//Exemplo 3
for(let key in info){
  console.log(key);
}
console.log("_____________");
//Exemplo 4
for(let key in info){
  console.log(info[key]);
}
console.log("_____________");
//Exemplo 5
let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente : "Sim",
};
for(let key in info){
  if(key === "recorrente" && info[key] === "Sim" && info1[key] === "Sim"){
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + info1[key]);
  }
  
}
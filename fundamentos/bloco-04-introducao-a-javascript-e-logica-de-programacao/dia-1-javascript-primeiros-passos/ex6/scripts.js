let peca = "ReI";
let x = peca.toLowerCase();
switch (x) {
case "peão":
  console.log("avança 1 casa para frente ou 2 apenas durante o primeiro movimento e 1 casa na diagonal para comer peças");
  break;
case "bispo":
  console.log("anda em linha reta diagonal");
  break;
case "torre":
  console.log("anda em linha reta horizontal e vertical");
  break;
case "cavalo":
  console.log("anda em forma de L horizontal ou vertical, podendo pular outras peças");
  break;
case "rainha":
  console.log("anda em linha reta diagonal, horizontal e vertical");
  break;
case "rei":
  console.log("anda 1 casa diagonal, horizontal e vertical");
  break;
default:
  console.log("Mensagem de erro!!!")
}
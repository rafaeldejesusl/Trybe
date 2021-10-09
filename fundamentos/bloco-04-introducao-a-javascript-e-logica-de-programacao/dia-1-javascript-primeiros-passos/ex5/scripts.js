const angulo1 = 70;
const angulo2 = 70;
const angulo3 = 40;
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Alerta de erro!!!");
}
else if (angulo1 + angulo2 + angulo3 == 180) {
  console.log(true);
}
else {
  console.log(false);
}
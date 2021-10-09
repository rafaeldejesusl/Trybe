const custo = 22;
const venda = 30;
const custoTotal = custo + (custo * 0.2);
if (custo < 0 || venda < 0) {
  console.log("Mensagem de erro");
} else {
  const lucro = venda - custoTotal;
  console.log(lucro * 1000);
}
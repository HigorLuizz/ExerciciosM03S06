export const generateDiscount = (valor, percentual) => {
  const desconto = Number(valor) * Number(percentual) / 100;
  const valorComDesconto = valor - desconto;
  const porcentagemFormatada = `${percentual}%`;

  return {
    porcentagem: porcentagemFormatada,
    valorComDesconto: Number(valorComDesconto.toFixed(2))
  };

}
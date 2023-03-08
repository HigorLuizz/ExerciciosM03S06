export const generateDiscount = (valor, percentual) => {
  const desconto = valor * percentual / 100;
  const valorComDesconto = valor - desconto;
  const porcentagemFormatada = `${percentual}%`;

  return {
    porcentagem: porcentagemFormatada,
    valorComDesconto: valorComDesconto
  };
}
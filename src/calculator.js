const toReal = number =>
  number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const pow12 = number => Math.pow(number, 1 / 12);

export default (monthSalary, savings, portfolio) => {
  const yearMonths = 12;
  const yearInflation = 1.045;
  const monthInflation = pow12(yearInflation);
  const yearInvestimentReturn = 1.075;
  const monthInvestimentReturn = pow12(yearInvestimentReturn);
  const safeWithdrawRateMonth = monthInvestimentReturn - monthInflation; // 1/0.03 (ano) = 33.33 times your annual expenses

  let months = 0;

  while (portfolio * safeWithdrawRateMonth <= monthSalary) {
    portfolio += savings;
    portfolio *= monthInvestimentReturn;
    portfolio = Math.round(portfolio);
    months++;
  }

  const resultCash = toReal(portfolio);
  const resultReturns = toReal(monthSalary);
  const yearResult = Math.floor(months / yearMonths);
  const monthResult = months % yearMonths;

  return `Após ${yearResult} anos e ${monthResult} meses, você terá ${resultCash} no banco, podendo sacar seguramente ${resultReturns} por mês.`;
};

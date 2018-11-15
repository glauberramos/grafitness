export default (monthSalary, savings, portfolio) => {
  let result;
  let months = 0;
  let totalCash = portfolio;
  const yearInflation = 1.045;
  const monthInflation = Math.pow(yearInflation, 1 / 12);
  const yearInvestimentReturn = 1.075;
  const monthInvestimentReturn = Math.pow(yearInvestimentReturn, 1 / 12);
  const safeWithdrawRate = monthInvestimentReturn - monthInflation; // 1/0.03 (ano) = 33.33 times your annual expenses
  const yearMonths = 12;

  while (totalCash * safeWithdrawRate <= monthSalary) {
    totalCash += savings;
    totalCash *= monthInvestimentReturn;
    totalCash = Math.round(totalCash);
    months++;
  }

  const toReal = number =>
    number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  const resultCash = toReal(totalCash);
  const resultReturns = toReal(monthSalary);
  const yearResult = Math.floor(months / yearMonths);
  const monthResult = months % yearMonths;

  result = `Após ${yearResult} anos e ${monthResult} meses, você terá ${resultCash} no banco, podendo sacar seguramente ${resultReturns} por mês.`;

  return result;
};

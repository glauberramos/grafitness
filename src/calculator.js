// export const NormalCalculator = (expenses, savings, portfolio) => {
//   let result;
//   let years = 0;
//   let totalCash = portfolio;
//   const safeWithdrawRate = 0.03;
//   const investimentReturn = 1.05;
//   const months = 12;

//   while (totalCash * safeWithdrawRate <= expenses) {
//     totalCash += savings;
//     totalCash *= investimentReturn;
//     totalCash = Math.round(totalCash);
//     years++;
//   }

//   const resultCash = totalCash.toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL"
//   });

//   const resultReturns = (
//     (totalCash * safeWithdrawRate) /
//     months
//   ).toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL"
//   });

//   result = `After ${years} years, you'll have ${resultCash}, withdrawal of ${resultReturns} per month.`;

//   return result;
// };

export default (monthSalary, savings, portfolio) => {
  let result;
  let months = 0;
  let totalCash = portfolio;
  const inflation = 1.00367; // 1.045 raiz 12
  const investimentReturn = 1.00604; // 1.075 raiz 12
  const safeWithdrawRate = investimentReturn - inflation; // 1/0.03 (ano) = 33.33 times your annual expenses
  const yearMonths = 12;

  while (totalCash * safeWithdrawRate <= monthSalary) {
    totalCash += savings;
    totalCash *= investimentReturn;
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

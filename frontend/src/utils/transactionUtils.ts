import { Transaction } from "../pages/TransactionsPage";

export const getUserTotals = (userId: number, transactions: Transaction[]) => {
  const userTransactions = transactions.filter((t) => t.userId === userId);
  const totalIncome = userTransactions
    .filter((t) => t.type === "receita")
    .reduce((acc, t) => acc + t.value, 0);
  const totalExpense = userTransactions
    .filter((t) => t.type === "despesa")
    .reduce((acc, t) => acc + t.value, 0);
  return { totalIncome, totalExpense, balance: totalIncome - totalExpense };
};

export const calculateGlobalTotals = (transactions: Transaction[]) => {
  const totalIncome = transactions
    .filter((t) => t.type === "receita")
    .reduce((acc, t) => acc + t.value, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "despesa")
    .reduce((acc, t) => acc + t.value, 0);
  return { totalIncome, totalExpense, totalBalance: totalIncome - totalExpense };
};

export const formatValue = (value: number) => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

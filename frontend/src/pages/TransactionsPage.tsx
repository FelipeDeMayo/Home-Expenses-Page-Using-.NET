import { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";
import { getUsers } from "../services/userService";
import { 
  Container, 
  Title, 
  Subtitle, 
  List, 
  ListItem, 
  Summary, 
  UserName, 
  Transactions, 
  Transaction 
} from "../styles/TransactionsPageStyle";

interface User {
  id: number;
  name: string;
  age: number;
}

interface Transaction {
  id: number;
  description: string;
  value: number;
  type: "despesa" | "receita";
  userId: number;
}

function TransactionsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
    getTransactions().then(setTransactions);
  }, []);

  const getUserTotals = (userId: number) => {
    const userTransactions = transactions.filter((t) => t.userId === userId);
    const totalIncome = userTransactions
      .filter((t) => t.type === "receita")
      .reduce((acc, t) => acc + t.value, 0);
    const totalExpense = userTransactions
      .filter((t) => t.type === "despesa")
      .reduce((acc, t) => acc + t.value, 0);
    return { totalIncome, totalExpense, balance: totalIncome - totalExpense };
  };

  const totalIncomeGlobal = transactions
    .filter((t) => t.type === "receita")
    .reduce((acc, t) => acc + t.value, 0);
  const totalExpenseGlobal = transactions
    .filter((t) => t.type === "despesa")
    .reduce((acc, t) => acc + t.value, 0);
  const totalBalanceGlobal = totalIncomeGlobal - totalExpenseGlobal;

  const formatValue = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <Container>
      <Title>Resumo das Transações</Title>
      <Subtitle>Totais por Usuário</Subtitle>
      <List>
        {users.map((user) => {
          const { totalIncome, totalExpense, balance } = getUserTotals(user.id);
          return (
            <ListItem key={user.id}>
              <UserName>{user.name}</UserName>
              <Transactions>
                <Transaction type="receita">
                  <strong>Receita:</strong> {formatValue(totalIncome)}
                </Transaction>
                <Transaction type="despesa">
                  <strong>Despesa:</strong> {formatValue(totalExpense)}
                </Transaction>
                <Transaction type={balance === 0 ? "saldo" : balance > 0 ? "receita" : "despesa"}>
                  <strong>Saldo:</strong> {formatValue(balance)}
                </Transaction>
              </Transactions>
            </ListItem>
          );
        })}
      </List>

      <Subtitle>Total Geral</Subtitle>
      <Summary>Receitas Totais: {formatValue(totalIncomeGlobal)}</Summary>
      <Summary>Despesas Totais: {formatValue(totalExpenseGlobal)}</Summary>
      <Summary>Saldo Líquido: {formatValue(totalBalanceGlobal)}</Summary>
    </Container>
  );
}

export default TransactionsPage;

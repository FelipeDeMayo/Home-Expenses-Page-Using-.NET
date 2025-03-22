import { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";
import { getUsers } from "../services/userService";
import { getUserTotals, calculateGlobalTotals, formatValue } from "../utils/transactionUtils";
import { User, Transaction } from "../types";
import Navbar from "../components/Navbar";
import { 
  Container, 
  Title, 
  Subtitle, 
  List, 
  ListItem, 
  Summary, 
  UserName, 
  Transactions, 
  Transaction as StyledTransaction
} from "../styles/TransactionsPageStyle";

function TransactionsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
    getTransactions().then(setTransactions);
  }, []);

  const { totalIncome, totalExpense, totalBalance } = calculateGlobalTotals(transactions);

  return (
    <div>
      <Navbar />

      <Container>
        <Title>Resumo das Transações</Title>
        <Subtitle>Totais por Usuário</Subtitle>
        <List>
          {users.map((user) => {
            const { totalIncome, totalExpense, balance } = getUserTotals(user.id, transactions);
            return (
              <ListItem key={user.id}>
                <UserName>{user.name}</UserName>
                <Transactions>
                  <StyledTransaction type="receita">
                    <strong>Receita:</strong> {formatValue(totalIncome)}
                  </StyledTransaction>
                  <StyledTransaction type="despesa">
                    <strong>Despesa:</strong> {formatValue(totalExpense)}
                  </StyledTransaction>
                  <StyledTransaction type={balance === 0 ? "saldo" : balance > 0 ? "receita" : "despesa"}>
                    <strong>Saldo:</strong> {formatValue(balance)}
                  </StyledTransaction>
                </Transactions>
              </ListItem>
            );
          })}
        </List>

        <Subtitle>Total Geral</Subtitle>
        <Summary>Receitas Totais: {formatValue(totalIncome)}</Summary>
        <Summary>Despesas Totais: {formatValue(totalExpense)}</Summary>
        <Summary>Saldo Líquido: {formatValue(totalBalance)}</Summary>
      </Container>
    </div>
  );
}

export default TransactionsPage;

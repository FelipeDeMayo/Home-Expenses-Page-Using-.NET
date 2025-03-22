import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { getTransactions } from "../services/transactionService";
import { handleCreateTransaction } from "../utils/addTransactionUtils";
import { User, Transaction } from "../types";
import Navbar from "../components/Navbar";  // Importe a Navbar
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
  ErrorMessage,
  TransactionList,
  TransactionItem,
} from "../styles/AddTransactionPageStyle";

function AddTransactionPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(-1);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState<"despesa" | "receita">("despesa");
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
    getTransactions().then(setTransactions);
  }, []);

  const isUserMinor = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.age < 18 : false;
  };

  const handleAddTransaction = () => {
    handleCreateTransaction(
      description,
      value,
      type,
      selectedUserId,
      users,
      setTransactions,
      setError,
      setDescription,
      setValue,
      setSelectedUserId,
      setType
    );
  };

  return (
    <>
      <Navbar />  {/* Aqui você coloca a Navbar fora do Container */}

      <Container>
        <Title>Cadastro de Transação</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormGroup>
          <Label htmlFor="user">Usuário:</Label>
          <Select
            id="user"
            name="user"
            value={selectedUserId === -1 ? "" : selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value ? +e.target.value : -1)}
          >
            <option value="">Selecione um usuário</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.age} anos)
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Descrição:</Label>
          <Input
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Salário, Conta de Luz"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="value">Valor (R$):</Label>
          <Input
            id="value"
            name="value"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ex: 100,00"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="type">Tipo:</Label>
          <Select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value as "despesa" | "receita")}
            disabled={selectedUserId === -1 || isUserMinor(selectedUserId)}
          >
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </Select>
        </FormGroup>

        <Button onClick={handleAddTransaction}>Adicionar Transação</Button>

        <h2>Últimas Transações</h2>
        <TransactionList>
          {transactions.map((t) => {
            const user = users.find((u) => u.id === t.userId);
            const userName = user ? user.name : "Usuário não encontrado";

            return (
              <TransactionItem key={t.id}>
                <span className="transaction-description">{t.description}</span>
                <br />
                <span className="transaction-type">
                  {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                </span>
                <br />
                <span>{userName}</span>
              </TransactionItem>
            );
          })}
        </TransactionList>
      </Container>
    </>
  );
}

export default AddTransactionPage;

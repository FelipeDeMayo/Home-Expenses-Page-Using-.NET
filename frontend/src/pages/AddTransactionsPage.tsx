import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { getTransactions, createTransaction } from "../services/transactionService";
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
  TransactionItem
} from "../styles/AddTransactionPageStyle";

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

  const handleCreateTransaction = async () => {
    setError(""); 
  
    if (selectedUserId === -1 || !description || !value || !type) {
      setError("Preencha todos os campos!");
      return;
    }
  
    const user = users.find((u) => u.id === selectedUserId);
    if (!user) {
      setError("Usuário não encontrado.");
      return;
    }
  
    if (user.age < 18 && type !== "despesa") {
      setError("Menores de idade só podem registrar despesas.");
      return;
    }
  
    const formattedValue = value.replace(",", "."); 
    const parsedValue = parseFloat(formattedValue); 
  
    if (isNaN(parsedValue)) {
      setError("Valor inválido.");
      return;
    }

    const newTransaction = await createTransaction(description, parsedValue, type, selectedUserId);

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setDescription("");
    setValue("");
    setSelectedUserId(-1);
    setType("despesa");
  };
  
  return (
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreateTransaction(); 
            }
          }}
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreateTransaction(); 
            }
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="type">Tipo:</Label>
        <Select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value as "despesa" | "receita")}
          disabled={selectedUserId === -1 || (users.find((u) => u.id === selectedUserId)?.age || 0) < 18}
        >
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </Select>
      </FormGroup>

      <Button onClick={handleCreateTransaction}>Adicionar Transação</Button>

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
  );
}

export default AddTransactionPage;

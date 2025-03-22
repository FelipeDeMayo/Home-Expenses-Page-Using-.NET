import { createTransaction } from "../services/transactionService";

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

export const validateTransaction = (description: string, value: string, type: "despesa" | "receita", selectedUserId: number, users: User[]): string | null => {
  if (selectedUserId === -1 || !description || !value || !type) {
    return "Preencha todos os campos!";
  }

  const user = users.find((u) => u.id === selectedUserId);
  if (!user) {
    return "Usuário não encontrado.";
  }

  if (user.age < 18 && type !== "despesa") {
    return "Menores de idade só podem registrar despesas.";
  }

  const formattedValue = value.replace(",", ".");
  const parsedValue = parseFloat(formattedValue);
  if (isNaN(parsedValue)) {
    return "Valor inválido.";
  }

  return null;
};

export const handleCreateTransaction = async (
  description: string,
  value: string,
  type: "despesa" | "receita",
  selectedUserId: number,
  users: User[],
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setSelectedUserId: React.Dispatch<React.SetStateAction<number>>,
  setType: React.Dispatch<React.SetStateAction<"despesa" | "receita">>
) => {
  setError("");

  const errorMessage = validateTransaction(description, value, type, selectedUserId, users);
  if (errorMessage) {
    setError(errorMessage);
    return;
  }

  const formattedValue = value.replace(",", ".");
  const parsedValue = parseFloat(formattedValue);

  const newTransaction = await createTransaction(description, parsedValue, type, selectedUserId);

  setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  setDescription("");
  setValue("");
  setSelectedUserId(-1);
  setType("despesa");
};

import { API_URL } from "../configs/config";

export async function getTransactions() {
  const response = await fetch(`${API_URL}/transactions`);
  return response.json();
}

export async function createTransaction(description: string, value: number, type: string, userId: number) {
  const response = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description, value, type, userId }),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar transação");
  }

  return response.json();
}

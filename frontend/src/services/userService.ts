import axios from "axios";
import { API_URL } from "../configs/config";

// Buscar todos os usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

// Criar um novo usuário
export const createUser = async (name: string, age: number) => {
  try {
    const response = await axios.post(
      `${API_URL}/users`,
      { name, age },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

// Deletar um usuário
export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};

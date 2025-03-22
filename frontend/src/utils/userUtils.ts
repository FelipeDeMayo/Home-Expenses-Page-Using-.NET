import { User } from "../types";
import { createUser } from "../services/userService"; 
import { deleteUser } from "../services/userService"; 

export const createNewUser = async (name: string, age: number, users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  const newUser: User = await createUser(name, age); 
  setUsers([...users, newUser]); 
};

export const deleteExistingUser = async (id: number, users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  await deleteUser(id);
  setUsers(users.filter((user: User) => user.id !== id)); 
};

import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { createNewUser, deleteExistingUser } from "../utils/userUtils";
import Navbar from "../components/Navbar";
import { Container, Title, UserList, UserItem, Button, Input, CreateButton, FormContainer } from "../styles/UsersPageStyle";

function UsersPage() {
  const [users, setUsers] = useState<{ id: number; name: string; age: number }[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleCreateUser = () => {
    createNewUser(name, parseInt(age), users, setUsers);
    setName("");
    setAge("");
  };

  const handleDeleteUser = (id: number) => {
    deleteExistingUser(id, users, setUsers);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateUser();
    }
  };

  return (
    <div>
      <Navbar />

      <Container>
        <Title>Lista de Usuários</Title>

        <UserList>
          {users.map(user => (
            <UserItem key={user.id}>
              <span>{user.name} - {user.age} anos</span>
              <Button onClick={() => handleDeleteUser(user.id)}>Excluir</Button>
            </UserItem>
          ))}
        </UserList>

        <Title>Criar Usuário</Title>
        <FormContainer>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nome"
            autoComplete="name"
          />
          <Input
            id="age"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            onKeyDown={handleKeyDown} 
            placeholder="Idade"
            type="number"
            autoComplete="off"
          />
          <CreateButton onClick={handleCreateUser}>Criar</CreateButton>
        </FormContainer>
      </Container> 
    </div>
  );
}

export default UsersPage;

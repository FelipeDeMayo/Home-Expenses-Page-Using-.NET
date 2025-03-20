import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../services/userService";
import { Container, Title, UserList, UserItem, Button, Input, CreateButton, FormContainer } from "../styles/UsersPageStyle";

function UsersPage() {
  const [users, setUsers] = useState<{ id: number; name: string; age: number }[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleCreateUser = async () => {
    const newUser = await createUser(name, parseInt(age));
    setUsers([...users, newUser]);
    setName("");
    setAge("");
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateUser();
    }
  };

  return (
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
  );
}

export default UsersPage;

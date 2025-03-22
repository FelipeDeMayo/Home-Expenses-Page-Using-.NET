import { Link } from "react-router-dom";
import styled from "styled-components";
import expensesImage from "../assets/images/expenses.png"; 
import { Container, Title, NavList, ChartImage, NavListItem } from "../styles/HomePageStyle";
import { useEffect } from "react"; 

const LinkButton = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-width: 200px;
  height: 50px; 

  &:hover {
    background-color: #0056b3;
  }
`;

function HomePage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Container>
      <Title>Controle de Gastos Residenciais</Title>
      <ChartImage src={expensesImage} alt="Gráfico de Controle de Gastos" />

      <nav>
        <NavList>
          <NavListItem>
            <LinkButton to="/users">Gerenciar Usuários</LinkButton>
          </NavListItem>
          <NavListItem>
            <LinkButton to="/transactions">Ver Transações</LinkButton>
          </NavListItem>
          <NavListItem>
            <LinkButton to="/add-transaction">Adicionar Transação</LinkButton>
          </NavListItem>
        </NavList>
      </nav>
    </Container>
  );
}

export default HomePage;

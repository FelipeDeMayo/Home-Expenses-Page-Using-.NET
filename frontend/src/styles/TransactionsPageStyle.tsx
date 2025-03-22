import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 5px;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #000000;
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px; 
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;  
  justify-content: center;
`;

export const ListItem = styled.li`
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  font-size: 1.3rem;
  color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  min-height: 150px;
  min-width: 300px;
  width: calc(33.33% - 10px);  
`;



export const UserName = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Transactions = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`;

interface TransactionProps {
  type: "despesa" | "receita" | "saldo";
}

export const Transaction = styled.span<TransactionProps>`
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) =>
    props.type === "receita" ? "#00FF00" :
    props.type === "despesa" ? "#ff0000" :
    props.type === "saldo" ? "#007bff" :
    "#000000"};
  text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
`;

export const Summary = styled.p`
  font-size: 1.2rem;
  color: #212529;
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  width: 100%;
  max-width: 600px;
  text-align: center;
  font-weight: bold;
`;

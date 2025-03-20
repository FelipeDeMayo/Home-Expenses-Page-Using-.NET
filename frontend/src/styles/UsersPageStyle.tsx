import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px;
  margin-top: 0;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10px 15px;
  gap: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;
  font-size: 1.2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 10px; 
  margin-top: 15px;
  width: 100%; 
`;

export const Input = styled.input`
  flex: 1; 
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  max-width: 200px; 
  min-width: 150px; 
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield; 
  }

  
  @media (max-width: 768px) {
    max-width: ${px2vw(180, 768)};
  }

  @media (max-width: 480px) {
    max-width: ${px2vw(150, 480)}; 
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background: #ff0000;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  text-shadow: -1px -1px 0 #000, 
                1px -1px 0 #000, 
               -1px  1px 0 #000, 
                1px  1px 0 #000;
  &:hover {
    background: #cc0000;
  }
`;

export const CreateButton = styled(Button)`
  background: #4caf50;

  &:hover {
    background: #388e3c;
  }
`;
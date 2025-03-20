import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px; 
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 500px; 
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box; 

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;

export const TransactionItem = styled.li`
  background: white;
  padding: 10px;
  margin-bottom: 15px; 
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  line-height: 1.4;
  text-align: center;
  width: calc(33.333% - 5px); 
  margin: 5px 0; 
  
  @media (max-width: 768px) {
    width: calc(50% - 10px); 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

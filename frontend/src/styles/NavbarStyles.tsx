import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #f8f9fa;
  padding: 15px;
  border-bottom: 2px solid #dee2e6;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const IconLink = styled.a`
  display: inline-block;
  img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

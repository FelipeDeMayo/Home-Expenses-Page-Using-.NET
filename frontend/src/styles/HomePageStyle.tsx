import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: ${px2vw(20)};
  margin-top: ${px2vw(5)};


  @media (max-width: 1024px) {
    padding: ${px2vw(20, 1024)};
  }

  @media (max-width: 768px) {
    padding: ${px2vw(15, 768)};
  }

  @media (max-width: 480px) {
    padding: ${px2vw(10, 480)};
  }
`;

export const Title = styled.h1`
  font-size: ${px2vw(40)};
  color: #000000;
  margin-top: ${px2vw(0)};
  margin-bottom: ${px2vw(20)};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: ${px2vw(40, 1024)};
  }

  @media (max-width: 768px) {
    font-size: ${px2vw(40, 768)};
  }

  @media (max-width: 480px) {
    font-size: ${px2vw(25, 480)};
    text-align: center;
  }
`;

export const ChartImage = styled.img`
  max-width: 100%;
  width: ${px2vw(300)}; 
  height: auto;
  border-radius: ${px2vw(20)};
  margin-top: ${px2vw(30)};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: ${px2vw(250, 1024)};
  }

  @media (max-width: 768px) {
    width: ${px2vw(350, 768)};
  }

  @media (max-width: 480px) {
    width: ${px2vw(200, 480)};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: clamp(1rem, ${px2vw(20)}, 1.2rem);
  display: flex;
  flex-direction: row;
  gap: ${px2vw(15)};
  margin-top: ${px2vw(70)};
  justify-content: center;
  width: 100%;
  max-width: ${px2vw(400)};

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: ${px2vw(10, 1024)};
  }
`;

export const NavListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 300px;
    min-width: 140px;
    text-align: center;
    background-color: #007bff;
    color: white;
    padding: 8px 16px; 
    font-size: 1.1rem;
    border-radius: 15px;
    text-decoration: none;
    transition: background 0.3s ease;

    max-height: 40px;
    overflow: hidden; 

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    a {
      width: 90%;
      font-size: clamp(0.85rem, ${px2vw(12)}, 1rem);
      padding: 6px 14px; 
      max-height: 25px;  
    }
  }

  @media (max-width: 480px) {
    a {
      width: 95%;
      font-size: clamp(0.8rem, ${px2vw(10)}, 0.9rem);
      padding: 4px 12px; 
      max-height: 20px;  
    }
  }
`;

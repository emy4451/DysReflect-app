import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 30px;
  background-color: #ffefd5;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 0 20px;

  &:first-child {
    flex: 2;
  }

  p {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  background-color: #dfdf29;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c0c000;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 8px;
    font-size: 18px;
  }
`;

const Types = () => {
  const handleButtonClick = () => {
    window.open('https://oraprdnt.uqtr.uquebec.ca/Gscdepot/ppg1025/105/ppg1025_105_c00.pdf'); // Ouvre le lien dans un nouvel onglet
  };

  return (
    <CardContainer>
      <Card>
        <Column>
          <p>En savoir plus sur les types de dyslexie</p>
        </Column>
        <Column>
          <Button onClick={handleButtonClick}>
            Allons-y <FaArrowRight />
          </Button>
        </Column>
      </Card>
    </CardContainer>
  );
};

export default Types;

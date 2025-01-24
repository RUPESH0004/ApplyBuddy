import React, { Children } from 'react';
import styled from 'styled-components';

// Define the styled component
const BUTTON = styled.button`
  width: 5rem;
  height: 2rem;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: #FF7E67;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF624E;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

// Functional component to render the button
export const Button = ({children,onPress,...props}) => {
  return <BUTTON {...props}>{children}</BUTTON>;
};

export default Button;


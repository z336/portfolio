import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/useTheme';
import styled from 'styled-components';
import { FaMoon } from 'react-icons/fa';

const StyledButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin-left: auto;
  }
`;

export default function ToggleTheme() {
  const [mount, setMount] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <StyledButton
      onClick={toggleTheme}
      className={theme}
      aria-label="Toggle Theme"
    >
      <FaMoon />
    </StyledButton>
  );
}

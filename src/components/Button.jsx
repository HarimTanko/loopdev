import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#548be3' : 'CD853f')};
  white-space: nowrap;
  outline: none;
  border: none;
  text-decoration: none;
  max-width: 350px;
  padding: 0 15px;
  cursor: pointer;
  tex-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 32px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;

import { List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled(List)`
  font-size: 28px;
  text-align: center;
`;

export const StyledListButton = styled(ListItemButton)`
  &.styledButton {
    display: flex;
    justify-content: center;
  }
`;

export const StyledListText = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  font-family: 'Playfair Display', serif; 
  color: #260124;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 0;
    background-color: #260124;
    transition: 
      width 0.3s ease-in-out, 
      left 0.3s ease-in-out;
  }
  
  &:hover::before {
    width: 100%; 
    left: 0; 
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledIcon = styled.span`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

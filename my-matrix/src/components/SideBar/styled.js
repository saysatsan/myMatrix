import { List, ListItemText } from '@mui/material';
import styled from 'styled-components';

export const CustomList = styled(List)`
  height: 100vh;    
`;

export const CustomListText = styled(ListItemText)`
  &.li-text{
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    background-color: #f2bfef38;
    padding: 20px;
    z-index: 999;
    text-align: center;
  }
  
`;

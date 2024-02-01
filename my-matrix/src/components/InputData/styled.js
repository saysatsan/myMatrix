import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;  
`;

export const StyledButton = styled(Button)`
  &.styledButton {
    background-color: #9d05a0;
    font-size: 24px;
    font-family: 'Playfair Display', serif;
    padding: 10px 25px;
    margin-bottom: 40px;
  }
`;

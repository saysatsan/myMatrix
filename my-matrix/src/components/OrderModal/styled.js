import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledOrderModal = styled(Box)`
  &.styledBox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: 15px;
    width: 50%;
    height: auto;
    background-color: #fcf1fb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 90%;
    }
  }  
`;

export const StyledOrderTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #9c27b0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
 &.button {
  margin-top: 20px;
  width: 223px;
  background-color: #9c27b0;
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  cursor: pointer;
 } 
`;

export const StyledClose = styled.img`
  align-self: flex-end;
`;

export const StyledPromo = styled.div`  
  font-size: 26px;
  color: #9c27b0;
`;

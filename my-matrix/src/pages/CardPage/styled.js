import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledCardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const StyledCardPageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #260124;
`;

export const StyledImage = styled.img`
  width: 70%;
  height: auto;
  margin-bottom: 20px;
`;

export const StyledCardPageP = styled.p`
  font-size: 22px;
  margin-bottom: 20px;
  color: #260124;
  align-self: flex-start;
`;

export const StyledCardPageSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #9c27b0;
`;

export const StyledCardPageButton = styled(Button)`
  &.styled-button {
    background-color: #fcf1fb;
    color: #9c27b0;
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px 20px;
    text-transform: none;
    &:hover {
      background-color: #260124;
      color: #f2bfef;
    }
  }
`;

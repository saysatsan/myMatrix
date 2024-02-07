import styled from 'styled-components';
import {
  Card, Typography, Button, CardActions,
} from '@mui/material';

export const StyledCard = styled(Card)`
  width: 300px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform-origin: center;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02) rotate(1deg);
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Playfair Display, serif';
    max-height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-family: 'Playfair Display, serif';
    color: #9a2c93;
  }
`;

export const StyledCardActions = styled(CardActions)`
  && {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
`;

export const StyledFavorite = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 2px 2px 0 2px;
  background-color: #ffffffb5;
  border-radius: 5px;
  cursor: pointer;
`;

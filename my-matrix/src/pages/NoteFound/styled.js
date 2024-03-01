import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledNoteFound = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
`;

export const StyledP = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: #f7703c;
    text-align: center;
`;

export const StyledButton = styled(Button)`
  && {
    font-size: 25px;
    font-weight: 700;
    color: #9c27b0;
    text-align: center;
  }
`;

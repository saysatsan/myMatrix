import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  &.styledBox {
    background-color: #ffead0;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 20px 20px 20px;
    border-radius: 10px;

    @media (max-width: 1024px) {
      width: 80%;
      height: 95%;
    }

    @media (max-width: 600px) {
      width: 90%;
      height: 95%;
      padding: 20px 10px 10px 10px;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #2e2e2e;
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffead07a;
  border-radius: 10px;
  cursor: pointer;
`;

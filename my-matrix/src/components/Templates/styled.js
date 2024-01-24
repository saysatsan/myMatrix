import styled from 'styled-components';
import { Grid } from '@mui/material';

const MainWrapper = styled(Grid)`
  &.mainWrapper {
    border-left: 1px solid #e0e0e0;
    overflow: auto;    
  }

  &.sidebar-wrapper {
    background-color: #f2bfef38;
    padding: 20px;
    z-index: 999;
    text-align: center;
  }
`;

export default MainWrapper;

import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledWrapper = styled(Grid)`
  &.mainWrapper {
    border-left: 1px solid #e0e0e0;
    overflow: auto;
    height: calc(100vh - 110px - 56px);
    margin-top: 109px;
  }

  &.sidebar-wrapper {
    background-color: #f2bfef38;
    padding: 40px 20px;
    z-index: 999;
    text-align: center;
    margin-top: 109px;
    height: calc(100vh - 110px - 56px);
  }

  &.footerWrapper {
    height: 30px;    
    width: 100%;
    display: flex;
  }
`;

export default StyledWrapper;

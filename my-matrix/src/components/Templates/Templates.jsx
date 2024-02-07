import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Footer from '../Footer/Footer';
import StyledWrapper from './styled';

const Templates = () => (
  <Grid container style={{ display: 'flex', minHeight: '100%' }}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <StyledWrapper className='sidebar-wrapper' item xs={3}>
      <SideBar />
    </StyledWrapper>
    <StyledWrapper className='mainWrapper' item xs={9}>
      <Outlet />
    </StyledWrapper>
    <StyledWrapper className='footerWrapper' item xs={12}>
      <Footer />
    </StyledWrapper>
  </Grid>
);

export default Templates;

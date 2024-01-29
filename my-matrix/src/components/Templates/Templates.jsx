import React from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Footer from '../Footer/Footer';
import MainWrapper from './styled';
import Cards from '../../pages/Cards/Cards';

const Templates = () => (
  <Grid container style={{ display: 'flex', minHeight: '100%' }}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <MainWrapper className='sidebar-wrapper' item xs={3}>
      <SideBar />
    </MainWrapper>
    <MainWrapper className='mainWrapper' item xs={9}>
      <Cards />
    </MainWrapper>
    <MainWrapper className='footerWrapper' item xs={12}>
      <Footer />
    </MainWrapper>
  </Grid>
);

export default Templates;

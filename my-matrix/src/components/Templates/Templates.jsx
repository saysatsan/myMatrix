import React from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Footer from '../Footer/Footer';
import MainWrapper from './styled';

const Templates = () => (
  <Grid container spacing={12}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <MainWrapper className='sidebar-wrapper' item xs={3}>
      <SideBar />
    </MainWrapper>
    <MainWrapper className='mainWrapper' item xs={9}>
      <div>MAIN</div>
    </MainWrapper>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);

export default Templates;

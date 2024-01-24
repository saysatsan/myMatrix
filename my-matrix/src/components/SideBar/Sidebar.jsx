import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { CustomList, CustomListText } from './styled';

const SideBar = () => (
  <CustomList>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemText className='li-text' primary="ARCANS OF THE TAROT" />
    </ListItemButton>
  </ListItem>
  <CustomListText disablePadding>
    <ListItemButton >
      <ListItemText className='li-text' primary="MATRIX OF DESTINY" />
    </ListItemButton>
  </CustomListText>
</CustomList>
);

export default SideBar;

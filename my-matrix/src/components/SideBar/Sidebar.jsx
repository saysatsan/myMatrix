import React from 'react';
import {
  ListItem, TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  StyledIcon, StyledList, StyledListButton, StyledListText,
} from './styled';

import IconCards from './images/icons8-tarot-cards-64.png';
import IconMatrix from './images/icons8-matrix-64.png';
import IconFavorite from './images/icons8-heart-64.png';
import { cardsAction } from '../../store/sources/cards';

const SideBar = () => {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(cardsAction.filterAction(event.target.value));
  };

  return (
    <StyledList>
      <ListItem disablePadding>
        <StyledListButton className='styledButton'>
          <StyledListText to={'/mymatrix/cards'}>Arcans of tarots</StyledListText>
          <Link to={'/mymatrix/cards'}>
            <StyledIcon>
              <img src={IconCards} alt='Icon cards' />
            </StyledIcon>
          </Link>
        </StyledListButton>
      </ListItem>
      <ListItem disablePadding>
        <StyledListButton className='styledButton'>
          <StyledListText to={'/mymatrix/matrix'}>Matrix of destiny</StyledListText>
          <Link to={'/mymatrix/matrix'}>
            <StyledIcon>
              <img src={IconMatrix} />
            </StyledIcon>
          </Link>
        </StyledListButton>
      </ListItem>
      <ListItem disablePadding>
        <StyledListButton className='styledButton'>
          <StyledListText to={'/mymatrix/favorite'}>Favorite cards</StyledListText>
          <Link to={'/mymatrix/favorite'}>
            <StyledIcon>
              <img src={IconFavorite} />
            </StyledIcon>
          </Link>
        </StyledListButton>
      </ListItem>
      <TextField
        id='outlined-basic'
        label='Search'
        variant='outlined'
        style={{ width: '100%' }}
        placeholder='Search arcan...'
        onChange={handleSearch}
      />
    </StyledList>
  );
};

export default SideBar;

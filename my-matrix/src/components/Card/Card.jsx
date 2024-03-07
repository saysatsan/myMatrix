import React, { useState } from 'react';
import { CardContent, CardMedia } from '@mui/material';
import {
  StyledButton, StyledCard, StyledCardActions, StyledFavorite, StyledTypography,
} from './styled';
import ModalCard from '../ModalCard/ModalCard';
import BaseModal from '../BaseModal/BaseModal';

const CardArcan = ({
  title, id, description, image, positive, negative, lesson, favorite, handleFavorite,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <StyledCard sx={{ maxWidth: 345 }} data-testid='cardWrapper'>
        <StyledFavorite onClick={() => handleFavorite(id)} data-testid='StyledFavorite'>
          {favorite
            ? <img src='/static/images/favorite.png' alt='favoriteIcon' />
            : <img src='/static/images/noFavorite.png' alt='notFavoriteIcon' />
          }
        </StyledFavorite>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
        <CardContent data-testid='CardContentTitle'>
          <StyledTypography gutterBottom variant="h5" component="div" >
            {title}
          </StyledTypography>
          <StyledTypography variant="body2" color="text.secondary">
            {description}
          </StyledTypography>
        </CardContent>
        <StyledCardActions>
          <StyledButton size="small" onClick={handleOpenModal}>Show More</StyledButton>
        </StyledCardActions>
      </StyledCard>
      <ModalCard open={openModal} handleClose={handleCloseModal}>
        <BaseModal
          image={image}
          title={title}
          description={description}
          positive={positive}
          negative={negative}
          lesson={lesson}
          handelClothe={handleCloseModal}
        />
      </ModalCard>
    </>
  );
};

export default CardArcan;

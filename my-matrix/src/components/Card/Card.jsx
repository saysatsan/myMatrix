import React, { useState } from 'react';
import {
  CardContent, CardMedia,
} from '@mui/material';
import {
  StyledButton, StyledCard, StyledCardActions, StyledFavorite, StyledTypography,
} from './styled';
import ModalCard from '../ModalCard/ModalCard';
import BaseModal from '../BaseModal/BaseModal';
import favoriteIcon from './images/favorite.png';
import notFavoriteIcon from './images/noFavorite.png';

const CardArcan = ({
  title, id, description, image, positive, negative, lesson, favorite, handleFavorite,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <StyledCard sx={{ maxWidth: 345 }}>
        <StyledFavorite onClick={() => handleFavorite(id)}>
          {favorite
            ? <img src={favoriteIcon} alt='favoriteIcon' />
            : <img src={notFavoriteIcon} alt='notFavoriteIcon' />
          }
        </StyledFavorite>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
        <CardContent>
          <StyledTypography gutterBottom variant="h5" component="div">
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

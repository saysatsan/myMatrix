import { CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { StyledTypography } from '../Card/styled';
import { StyledBox, StyledCloseButton, StyledSpan } from './styled';
import iconClose from './images/icons8-close-45.png';

const BaseModal = ({
  image, title, description, positive, negative, lesson, handelClothe,
}) => (
  <StyledBox className='styledBox' sx={{ width: 600 }}>
    <StyledCloseButton onClick={handelClothe}>
      <img src={iconClose} alt='icon Close' />
    </StyledCloseButton>
    <CardMedia
      sx={{ height: 450 }}
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
      <StyledTypography variant="body2" color="text.secondary">
        <StyledSpan>Energy in positive: </StyledSpan>{positive}
      </StyledTypography>
      <StyledTypography variant="body2" color="text.secondary">
        <StyledSpan>Energy in negative: </StyledSpan>{negative}
      </StyledTypography>
      <StyledTypography variant="body2" color="text.secondary">
        <StyledSpan>Lesson: </StyledSpan>{lesson}
      </StyledTypography>
    </CardContent>
  </StyledBox>
);

export default BaseModal;

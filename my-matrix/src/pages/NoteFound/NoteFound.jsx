import React from 'react';
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledNoteFound, StyledP } from './styled';

const NoteFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledNoteFound>
      <img src='/static/images/notfound.png' alt="ImageNoteFound" />
      <StyledP>Sorry, the page you are looking for doesn`t exist or has been removed.</StyledP>
      <StyledButton color="secondary" onClick={handleGoBack}>
        Return to the previous page
      </StyledButton>
    </StyledNoteFound>
  );
};

export default NoteFound;

import React from 'react';
import ImageNoteFound from './notfound.png';
import { StyledNoteFound, StyledP } from './styled';

const NoteFound = () => (
    <StyledNoteFound>
      <img src={ImageNoteFound} alt="ImageNoteFound" />
      <StyledP>Sorry, the page you are looking for doesn`t exist or has been removed.</StyledP>
    </StyledNoteFound>
);

export default NoteFound;

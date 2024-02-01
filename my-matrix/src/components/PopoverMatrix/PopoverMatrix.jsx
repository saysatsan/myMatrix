import { Popover } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDetails, StyledPopover } from './styled';

const PopoverMatrix = (
  {
    index, id, anchorEl, onClose, open,
  },
) => {
  const navigate = useNavigate();

  const handelGoToDetails = () => {
    navigate(`/card/${id}`);
    console.log(id);
  };
  let popoverContent;

  switch (index) {
    case 0:
      popoverContent = 'This energy is our business card,which immediately says a lot about the personality';
      break;
    case 1:
      popoverContent = 'This energy is our connection with Heaven and the Guardian Angel. Tells about how we receive energy from the sky';
      break;
    case 2:
      popoverContent = 'This energy is money karma. This is our experience, which we gain during our life.';
      break;
    case 3:
      popoverContent = 'This energy is our connection to past lives. The cumulative negative experience of past lives is stored there.';
      break;
    case 4:
      popoverContent = 'This energy is our comfort zone, the place where our soul subconsciously or consciously aspires, the place of accumulation of our energy. Because of this energy, you communicate and you are perceived in society';
      break;
    default:
      popoverContent = 'Default Text';
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
    >
      <StyledPopover>
        {popoverContent}
        <StyledDetails onClick={handelGoToDetails}>Details about {id} arcan</StyledDetails>
      </StyledPopover>
    </Popover>
  );
};

export default PopoverMatrix;

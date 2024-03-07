import React from 'react';
import { Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledDetails, StyledPopover } from './styled';
import { popoverMessages } from '../../constants/constants';

const PopoverMatrix = (
  {
    index, id, anchorEl, onClose, open,
  },
) => {
  const navigate = useNavigate();
  const handelGoToDetails = () => {
    navigate(`/card/${id}`);
  };
  const popoverContent = popoverMessages[index] || 'Default Text';

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
    >
      <StyledPopover>
        {popoverContent}
        <StyledDetails onClick={handelGoToDetails}>
          Details about {id} arcan
        </StyledDetails>
      </StyledPopover>
    </Popover>
  );
};

export default PopoverMatrix;

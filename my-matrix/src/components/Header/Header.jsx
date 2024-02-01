import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeaderContainer, StyledHeaderTitle } from './styled';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <StyledHeaderContainer >
      <StyledHeaderTitle onClick={handleClick}>
        Matrix of Destiny
      </StyledHeaderTitle>
    </StyledHeaderContainer>
  );
};

export default Header;

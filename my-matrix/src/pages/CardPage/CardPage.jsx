import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledCardPage, StyledCardPageButton, StyledCardPageP, StyledCardPageSpan, StyledCardPageTitle, StyledImage,
} from './styled';
import ModalCard from '../../components/ModalCard/ModalCard';
import OrderModal from '../../components/OrderModal/OrderModal';
import { cardsThunk } from '../../store/sources/cards';

const CardPage = () => {
  const { card, loading } = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardId = useParams();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    dispatch(cardsThunk.fetchCardPage(cardId.id));
  }, [dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <LinearProgress color="secondary" />;

  return (
    <StyledCardPage>
      <StyledImage src={card.image} alt={card.title} />
      <StyledCardPageTitle>{card.title}</StyledCardPageTitle>
      <StyledCardPageP>
        {card.description}
      </StyledCardPageP>
      <StyledCardPageP>
        <StyledCardPageSpan>Energy in positive:</StyledCardPageSpan> <br />
        {card.positive}
      </StyledCardPageP>
      <StyledCardPageP>
        <StyledCardPageSpan>Energy in negative:</StyledCardPageSpan> <br />
        {card.negative}
      </StyledCardPageP>
      <StyledCardPageP>
        <StyledCardPageSpan>Lesson:</StyledCardPageSpan> <br />
        {card.lesson}
      </StyledCardPageP>
      <StyledCardPageButton className='styled-button' onClick={handleOpenModal}>
        ORDER A CONSULTATION
      </StyledCardPageButton>
      <Button color="secondary" onClick={handleGoBack}>
        Back
      </Button>
      <ModalCard open={openModal} handleClose={handleCloseModal}>
        <OrderModal handleClothe={handleCloseModal} />
      </ModalCard>
    </StyledCardPage>
  );
};

export default CardPage;

import React, { useEffect, useMemo } from 'react';
import { Alert, LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CardArcan from '../../components/Card/Card';
import { StyledCardsWrapper } from './styled';
import { cardsThunk } from '../../store/sources/cards';

const Cards = () => {
  const {
    cards, loading, error, filter,
  } = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsThunk.fetchCards());
  }, [dispatch]);

  const filterCards = useMemo(
    () => cards.filter((card) => card.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1),
    [cards, filter],
  );

  const handleToggleFavorite = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const params = { ...clickedCard, isFavorite: !clickedCard.isFavorite };

    dispatch(cardsThunk.changeCard({ id, params }));
  };

  if (loading) return <LinearProgress color="secondary" data-testid='loadingSpinner'/>;
  if (error) return <Alert>Error: {error}</Alert>;

  return (
    <StyledCardsWrapper data-testid="cardsWrapper">
      {filterCards.map((card) => (
        <CardArcan
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          positive={card.positive}
          negative={card.negative}
          lesson={card.lesson}
          favorite={card.isFavorite}
          handleFavorite={handleToggleFavorite}
        />
      ))}
    </StyledCardsWrapper>
  );
};

export default Cards;

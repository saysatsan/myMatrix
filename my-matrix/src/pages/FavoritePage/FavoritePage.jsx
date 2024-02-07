import React, { useEffect, useMemo } from 'react';
import { Alert, LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CardArcan from '../../components/Card/Card';
import { StyledFavoritePage } from './styled';
import { cardsThunk } from '../../store/sources/cards';

const FavoritePage = () => {
  const {
    cards, loading, error,
  } = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsThunk.fetchCards());
  }, [dispatch]);

  const handleToggleFavorite = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const params = { ...clickedCard, isFavorite: !clickedCard.isFavorite };

    dispatch(cardsThunk.changeCard({ id, params }));
  };

  const filterCards = useMemo(
    () => cards.filter((card) => card.isFavorite === true),
    [cards],
  );

  if (loading) return <LinearProgress color="secondary" />;
  if (error) return <Alert>Error: {error}</Alert>;

  return (
    <StyledFavoritePage>
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
    </StyledFavoritePage>
  );
};

export default FavoritePage;

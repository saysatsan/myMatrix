import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import { LinearProgress } from '@mui/material';
import CardArcan from '../../components/Card/Card';
import { StyledCardsWrapper } from './styled';
import taroCards from '../../api/services/taroCards';

const Cards = ({ searchValue }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCards = useCallback(async () => {
    try {
      const responseCards = await taroCards.get();

      setCards(responseCards);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);

  const filterCards = useMemo(
    () => cards.filter((card) => card.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1),
    [cards, searchValue],
  );

  if (loading) return <LinearProgress color="secondary" />;

  return (
    <StyledCardsWrapper>
      {filterCards.map((card) => (
        <CardArcan
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          positive={card.positive}
          negative={card.negative}
          lesson={card.lesson}
        />
      ))}
    </StyledCardsWrapper>
  );
};

export default Cards;

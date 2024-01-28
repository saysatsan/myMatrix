import React, { useEffect, useCallback, useState } from 'react';
import CardArcan from '../../components/Card/Card';
import { CardsWrapper } from './styled';
import taroCards from '../../api/services/taroCards';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const getCards = useCallback(async () => {
    const responseCards = await taroCards.get();
    setCards(responseCards);
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <CardsWrapper>
      {cards.map((card) => (
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
    </CardsWrapper>
  );
};

export default Cards;

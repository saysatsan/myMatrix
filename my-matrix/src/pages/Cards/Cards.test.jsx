import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Cards from './Cards';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Cards', () => {
  const renderCard = () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>,
    );
  };

  it('should render Cards component', async () => {
    renderCard();

    await waitFor(() => {
      expect(screen.getByTestId('cardsWrapper')).toBeInTheDocument();
    });
  });

  it('should render loading spinner', async () => {
    renderCard();

    await waitFor(() => {
      expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
    });
  });

  it('should filter cards based on the filter value', async () => {
    renderCard();
  
    await waitFor(() => {      
      const cardsWithTitle = screen.queryAllByText(/0/);
      expect(cardsWithTitle.length).toBeGreaterThan(1);
    });
  });
});

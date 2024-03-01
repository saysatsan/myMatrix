import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardArcan from './Card';

describe('Card', () => {
  const mockData = {
    title: 'Title',
    id: 1,
    description: 'Description',
    image: 'image.jpg',
    positive: 'Positive text',
    negative: 'Negative text',
    lesson: 'Sample Lesson',
    favorite: false,
    handleFavorite: jest.fn(),
  };
  const renderCard = () => render(<CardArcan {...mockData} />);

  it('should render the component', () => {
    renderCard();

    const component = screen.getByTestId('cardWrapper');
    expect(component).toBeInTheDocument();
  });

  it('renders correct favorite icon on the "favorite" prop', () => {
    const { getByTestId } = renderCard();
    const favoriteIcon = getByTestId('StyledFavorite').querySelector('img');
    
    expect(favoriteIcon).toHaveAttribute('src', '/static/images/noFavorite.png');
  });

  it('should call handleFavorite when favorite icon is clicked', () => {
    const { getByTestId } = renderCard();
    const favoriteIcon = getByTestId('StyledFavorite');
    fireEvent.click(favoriteIcon);

    expect(mockData.handleFavorite).toHaveBeenCalled();
  });  

  it('correctly displays the text in the component', () => {
    const { getByText } = renderCard();    
    const text = getByText('Title');

    expect(text).toBeInTheDocument();
  });

  it('should call handleOpenModal when "Show More" button is clicked', () => {
    const { getByText } = renderCard();
    const showMoreButton = getByText('Show More');
    fireEvent.click(showMoreButton);

    const modal = screen.getByText('Positive text');
    expect(modal).toBeInTheDocument();
  });

  it( 'should call handleCloseModal when "Close" button is clicked', () => {
    const { getByText } = renderCard();
    const showMoreButton = getByText('Show More');
    fireEvent.click(showMoreButton);

    const closeButton = screen.getByTestId('closeButton');
    fireEvent.click(closeButton);

    const modal = screen.queryByText('Positive text');
    expect(modal).not.toBeInTheDocument();
  } );
});

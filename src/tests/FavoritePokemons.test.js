import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

test('Teste o componente <FavoritePokemons.js />', () => {
  renderWithRouter(<FavoritePokemons />);

  const text = screen.getByText(/no favorite pokemon found/i);
  expect(text).toBeInTheDocument();
});

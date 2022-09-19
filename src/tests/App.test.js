import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('testando se no topo da aplicação há um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(aboutLink).toBeInTheDocument();

  const favoriteLink = screen.getByRole('link', { name: /favorite pokémon/i });
  expect(favoriteLink).toBeInTheDocument();
});

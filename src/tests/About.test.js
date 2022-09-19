import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

test('Testando se a página contém um heading h2 com o texto "About Pokédex"', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading', {
    level: 2, name: /about pokédex/i,
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Testando se a página contém a imagem de uma Pokédex', () => {
  renderWithRouter(<About />);

  const aboutImg = screen.getByRole('img', { name: /pokédex/i });
  expect(aboutImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});

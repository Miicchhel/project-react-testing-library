import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste o componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetailsLink);
  expect(moreDetailsLink).not.toBeInTheDocument();

  const pokemon = screen.getByRole('heading', {
    name: /pikachu details/i,
    level: 2,
  });
  expect(pokemon).toBeInTheDocument();

  const summary = screen.getByRole('heading', {
    name: /summary/i,
    level: 2,
  });
  expect(summary).toBeInTheDocument();

  const p1Summary = 'This intelligent Pokémon roasts hard berries with';
  const p2Summary = ' electricity to make them tender enough to eat.';
  const paragraphSummary = screen.getByText(p1Summary + p2Summary);
  expect(paragraphSummary).toBeInTheDocument();

  const gameLocation = screen.getByRole('heading', {
    name: /Game Locations of Pikachu/i,
    level: 2,
  });
  expect(gameLocation).toBeInTheDocument();

  const pokemonImg = screen.getAllByRole('img');
  expect(pokemonImg[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(pokemonImg[2]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(pokemonImg[1]).toHaveAttribute('alt', 'Pikachu location');
  expect(pokemonImg[2]).toHaveAttribute('alt', 'Pikachu location');

  const locationImg1 = screen.getByText(/kanto viridian forest/i);
  expect(locationImg1).toBeInTheDocument();

  const locationImg2 = screen.getByText(/Kanto Power Plant/i);
  expect(locationImg2).toBeInTheDocument();

  const label = screen.getByLabelText(/pokémon favoritado\?/i);
  expect(label).toBeInTheDocument();
});

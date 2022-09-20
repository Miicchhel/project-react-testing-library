import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokemonsName = [];
const pokemonsImgSrc = [];

pokemons.forEach(({ name, image }) => {
  if (!pokemonsName.includes(name)) pokemonsName.push(name);
  if (!pokemonsImgSrc.includes(image)) pokemonsImgSrc.push(image);
});

test('Testando se imagem do pokemon possui o src e o alt corretos', () => {
  renderWithRouter(<App />);

  const btnProximo = screen.getByTestId('next-pokemon');

  pokemonsName.forEach((pokemon, index) => {
    // console.log(pokemonsImgSrc[index]);
    const pokemonImg = screen.getAllByRole('img');
    expect(pokemonImg[0]).toHaveAttribute('src', pokemonsImgSrc[index]);
    expect(pokemonImg[0]).toHaveAttribute('alt', `${pokemon} sprite`);
    userEvent.click(btnProximo);
  });
});

test('Testando se imagem de favorito possui o src e o alt corretos', () => {
  const { history } = renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetailsLink);

  const favoriteInput = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  userEvent.click(favoriteInput);

  act(() => {
    history.push('/favorites');
  });

  const pokemonImg = screen.getAllByRole('img');
  expect(pokemonImg[1]).toHaveAttribute('src', '/star-icon.svg');
  expect(pokemonImg[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
});

test('É exibido na tela um link com o href "/pokemons/<id>" e o tipo do pokemon', () => {
  renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  expect(moreDetailsLink).toHaveAttribute('href', '/pokemons/25');

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType.innerHTML).toBe('Electric');
});

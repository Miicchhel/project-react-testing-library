import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
// import { Pokedex } from '../pages';
import App from '../App';
import pokemons from '../data';

const buttonsName = [];
pokemons.forEach(({ type }) => {
  if (!buttonsName.includes(type)) buttonsName.push(type);
});
test('Os botões de filtragem por tipo possuem o nome correto', () => {
  renderWithRouter(<App />);

  ['All', ...buttonsName].forEach((item) => {
    const testBtn = screen.getByRole('button', { name: `${item}` });
    expect(testBtn).toBeInTheDocument();
  });
});

test('Os botões de filtro tem o data-testid=pokemon-type-button menos o btn All', () => {
  renderWithRouter(<App />);

  const qttBtn = 7;

  const buttons = screen.getAllByTestId(/pokemon-type-button/i);
  expect(buttons).toHaveLength(qttBtn);
  buttons.forEach((testBtn) => {
    expect(testBtn).toBeInTheDocument();
    expect(testBtn).toHaveAttribute('data-testid', 'pokemon-type-button');
  });

  const btnAll = screen.getByRole('button', { name: /all/i });
  expect(btnAll).not.toHaveAttribute('data-testid', 'pokemon-type-button');
});

it('É possível clicar no botão de filtragem All', () => {
  renderWithRouter(<App />);

  const btnAll = screen.getByRole('button', { name: /all/i });
  expect(btnAll).toBeInTheDocument();
  userEvent.click(btnAll);
});

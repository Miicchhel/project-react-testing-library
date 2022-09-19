import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste o componente <NotFound.js />', () => {
  renderWithRouter(<NotFound />);

  const testHeader = screen.getByRole('heading', {
    level: 2, name: /page requested not found/i,
  });
  expect(testHeader).toBeInTheDocument();

  const testImg = screen.getByRole('img');
  expect(testImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders Welcome heading', () => {
  render(<Welcome />);
  const headingElement = screen.getByRole('heading', { name: /Welcome/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders Thanks for visiting heading', () => {
  render(<Welcome />);
  const headingElement = screen.getByRole('heading', { name: /Thanks for visiting/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders Click me button', () => {
  render(<Welcome />);
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});

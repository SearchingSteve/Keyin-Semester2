import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

const users = ['Simon', 'Barbera', 'Bob', 'Elf', 'Alexandar', 'Brad'];

test('renders Users starting with letter B heading', () => {
  render(<Users users={users} />);
  const headingElement = screen.getByRole('heading', { name: /Users starting with letter B/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders list element', () => {
  render(<Users users={users} />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});

test('renders correct number of users starting with B', () => {
  render(<Users users={users} />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

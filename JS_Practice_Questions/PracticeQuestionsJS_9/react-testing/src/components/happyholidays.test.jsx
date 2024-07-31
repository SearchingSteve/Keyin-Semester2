import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HappyHolidays from './HappyHolidays';

test('renders Its December!!! heading', () => {
  render(<HappyHolidays />);
  const headingElement = screen.getByText(/It's December!!!/i);
  expect(headingElement).toBeInTheDocument();
});

test('does not render Happy Holidays Hurrah! on start', () => {
  render(<HappyHolidays />);
  const holidayMessage = screen.queryByText(/Happy Holidays Hurrah!/i);
  expect(holidayMessage).not.toBeInTheDocument();
});

test('renders Happy Holidays Hurrah! after 3 seconds', async () => {
  render(<HappyHolidays />);
  await waitFor(() => {
    const holidayMessage = screen.getByText(/Happy Holidays Hurrah!/i);
    expect(holidayMessage).toBeInTheDocument();
  }, { timeout: 3500 }); 
});

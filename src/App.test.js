import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders travel app', () => {
  render(<App />);
  const linkElement = screen.getByText(/travel with kell/i);
  expect(linkElement).toBeInTheDocument();
});

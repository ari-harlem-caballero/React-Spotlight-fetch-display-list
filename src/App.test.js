import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/List of Amazing Foods/i);
  expect(linkElement).toBeInTheDocument();
});

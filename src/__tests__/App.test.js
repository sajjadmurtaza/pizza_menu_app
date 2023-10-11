import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

jest.mock('../hooks/useFetchMenus', () => {
  return () => [
    { id: 1, name: 'Pizza Margherita', price: 10 },
    { id: 2, name: 'Pizza Napoletana', price: 12 },
  ];
});

describe('App', () => {
  it('renders search and sort options', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('Sort Ascending')).toBeInTheDocument();
    expect(screen.getByText('Sort Descending')).toBeInTheDocument();
  });

  it('renders the menu list', () => {
    render(<App />);
    expect(screen.getByText('Pizza Margherita - $10.00')).toBeInTheDocument();
    expect(screen.getByText('Pizza Napoletana - $12.00')).toBeInTheDocument();
  });

  it('allows searching for menus', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Search by name');
    fireEvent.change(input, { target: { value: 'Pizza Margherita' } });
    
    expect(screen.getByText('Pizza Margherita - $10.00')).toBeInTheDocument();
  });
});

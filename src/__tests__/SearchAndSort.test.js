import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchAndSort from '../components/SearchAndSort';

describe('SearchAndSort', () => {
  let setSearchTerm;
  let setSortOrder;

  beforeEach(() => {
    setSearchTerm = jest.fn();
    setSortOrder = jest.fn();

    render(<SearchAndSort searchTerm="" setSearchTerm={setSearchTerm} setSortOrder={setSortOrder} />);
  });

  it('renders search input and sort buttons', () => {
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('Sort Ascending')).toBeInTheDocument();
    expect(screen.getByText('Sort Descending')).toBeInTheDocument();
  });

  it('calls setSearchTerm when typing in the search input', () => {
    const input = screen.getByPlaceholderText('Search by name');
    fireEvent.change(input, { target: { value: 'Pizza' } });
    expect(setSearchTerm).toHaveBeenCalledWith('Pizza');
  });

  it('calls setSortOrder with "asc" when the Sort Ascending button is clicked', () => {
    const button = screen.getByText('Sort Ascending');
    fireEvent.click(button);
    expect(setSortOrder).toHaveBeenCalledWith('asc');
  });

  it('calls setSortOrder with "desc" when the Sort Descending button is clicked', () => {
    const button = screen.getByText('Sort Descending');
    fireEvent.click(button);
    expect(setSortOrder).toHaveBeenCalledWith('desc');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuList from '../components/MenuList.js';

describe('MenuList', () => {
  it('renders an empty list when no menus are passed', () => {
    render(<MenuList menus={[]} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.children.length).toBe(0);
  });

  it('renders the list of menus', () => {
    const menus = [
      { id: 1, name: 'Pizza Margherita', price: 10 },
      { id: 2, name: 'Pizza Napoletana', price: 12 },
    ];

    render(<MenuList menus={menus} />);
    const items = screen.getAllByRole('listitem');
    
    expect(items.length).toBe(2);
    expect(screen.getByText('Pizza Margherita - $10.00')).toBeInTheDocument();
    expect(screen.getByText('Pizza Napoletana - $12.00')).toBeInTheDocument();
  });

  it('does not render if menus is not an array', () => {
    render(<MenuList menus={null} />);
    const list = screen.getByRole('list');
    expect(list.children.length).toBe(0);

    render(<MenuList menus={undefined} />);
    expect(list.children.length).toBe(0);
  });
});

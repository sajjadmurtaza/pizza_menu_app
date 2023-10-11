import React, { useState } from 'react';
import MenuList from './MenuList';
import SearchAndSort from './SearchAndSort';
import useFetchMenus from '../hooks/useFetchMenus';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const menus = useFetchMenus(searchTerm, sortOrder);

  return (
    <div>
      <SearchAndSort 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        setSortOrder={setSortOrder} 
      />
      <MenuList menus={menus} />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

const useFetchMenus = (searchTerm, sortOrder) => {
  const [menus, setMenus] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}?name=${searchTerm}&order=${sortOrder}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setMenus(data);
        } else {
          console.error('Data from API is not an array:', data);
        }
      })
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, [searchTerm, sortOrder]);

  return menus;
};

export default useFetchMenus;

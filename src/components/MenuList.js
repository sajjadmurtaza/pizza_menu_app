import React from 'react';

const MenuList = ({ menus }) => {
  return (
    <ul className="menu-list">
      {
        Array.isArray(menus) && menus.map((menu) => (
          <li key={menu.id} className="menu-item">
            {menu.name} - ${menu.price.toFixed(2)}
          </li>
        ))
      }
    </ul>
  );
};

export default MenuList;

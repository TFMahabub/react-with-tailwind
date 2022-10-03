import React from 'react';

const Nav = ({menus: menu}) => {
  return (
    <li className='mx-3 font-medium md:text-lg ease-in-out duration-300 hover:text-red-600'>
      <a href={menu.path}>{menu.name}</a>
    </li>
  );
};

export default Nav;
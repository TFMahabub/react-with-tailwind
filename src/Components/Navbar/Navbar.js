import React, { useState } from 'react';
import Nav from './Nav';
import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [open, setOpen] = useState(true);
  // console.log(open)
  const navMenus = [
    {id: 1, name: 'Home', path:'/home'},
    {id: 2, name: 'Price', path:'/home'},
    {id: 3, name: 'Contact', path:'/home'},
    {id: 4, name: 'About Us', path:'/home'},
  ]
  return (
    <nav className='text-center flex justify-between bg-slate-300 py-4 px-8'>
      {/* ----------logo---------- */}
      <div className=''>
        <h2 className='text-xl font-semibold'>This is Logo</h2>
      </div>
      {/*--------menus--------*/}
      <ul className='md:flex justify-center'>
        {
          navMenus.map(menu => <Nav key={menu.id} menus ={menu}/>)
        }
      </ul>
      {/* ---------togolle-bar--------- */}
      <div className='md:hidden'>
        <button onClick={() => setOpen(!open)}>
          {
            open? <Bars3Icon className="h-7 w-8"/>: <XMarkIcon className='h-7 w-7'/>
          }
          </button>
        
        
      </div>

    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import Nav from './Nav';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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
    <nav className='text-center flex justify-between bg-slate-300 py-4 px-8 relative md:static'>
      {/* ----------logo---------- */}
      <div className=''>
        <h2 className='text-xl font-semibold'>This is Logo</h2>
      </div>
      {/*--------menus--------*/}
      {/* ---------togolle-bar--------- */}
      <div>
        <ul className={`md:flex justify-center absolute left-[50%] px-[17px] pb-4 ease-in duration-300 ${open? 'top-[-120px] ': 'top-6 '}  md:static bg-slate-300`}>
          {
            navMenus.map(menu => <Nav key={menu.id} menus ={menu}/>)
          }
        </ul>
        <button onClick={() => setOpen(!open)} className='md:hidden'>
          {
            open? <Bars3Icon className="h-7 w-8"/>
            : <XMarkIcon className='h-7 w-7'/>
          }
          </button>
        
        
      </div>

    </nav>
  );
};

export default Navbar;
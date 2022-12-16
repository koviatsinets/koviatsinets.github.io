import React from 'react'
import './NavBar.scss'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { Menu } from '../Menu/Menu'
import { PagesLinks } from '../PagesLinks/PagesLinks'
import { Search } from '../Search/Search'

export const NavBar = () => {

  const market = useSelector( state => state.market );

  return (
    <nav className='NavBar'>
      <Menu/>
      <PagesLinks />
      <Search />
      <NavLink to="/busket" className='CartBox'>
        <span className="Cart material-symbols-outlined">shopping_cart</span>
        <div className='CartCount'>{market.cart.length}</div>
      </NavLink>
    </nav>
  )
}

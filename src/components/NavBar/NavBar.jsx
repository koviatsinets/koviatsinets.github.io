import React from 'react'
import './NavBar.scss'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { PagesLinks } from '../PagesLinks/PagesLinks'
import { Search } from '../Search/Search'

export const NavBar = () => {

  const market = useSelector( state => state.market );

  return (
    <nav className='NavBar'>
      <div className='Menu'></div>
      <PagesLinks />
      <Search />
      <NavLink to="/busket" className='CartBox'>
        <span className="Cart material-symbols-outlined">shopping_cart</span>
        <div className='CartCount'>{market.cart.length}</div>
      </NavLink>
    </nav>
  )
}

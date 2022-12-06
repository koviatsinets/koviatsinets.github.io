import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.scss';

export const PagesLinks = () => {
          
    // function getLinkClass(obj) {
    //   let className="PageLink";
    //   if ( obj.isActive )
    //     className+=" ActivePageLink";
    //   return className;
    // }

    return (
      <div className='PagesLinks'>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/catalog">CATALOG</NavLink>
        <NavLink to="/busket">CART</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    );

};

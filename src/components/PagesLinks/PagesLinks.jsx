import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.scss';

export const PagesLinks = () => {
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
    }

    return (
      <div className='PagesLinks'>
        <NavLink to="/" className={getLinkClass}>HOME</NavLink>
        <NavLink to="/catalog" className={getLinkClass}>CATALOG</NavLink>
        <NavLink to="/busket" className={getLinkClass}>CART</NavLink>
        <NavLink to="/about" className={getLinkClass}>ABOUT</NavLink>
      </div>
    );

};


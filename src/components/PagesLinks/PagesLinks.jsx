import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './PagesLinks.scss';

export const PagesLinks = () => {

  const user = useSelector(state => state.user)
  const market = useSelector(state => state.market)
          
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
       { 
       user.email === 'koviatsinets@gmail.com'?
          <NavLink to="/edit" className={getLinkClass}>EDIT</NavLink>
        :
          <NavLink to="/about" className={getLinkClass}>ABOUT</NavLink>
        }
      </div>
    );

};


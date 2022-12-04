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
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/busket">Корзина</NavLink>
        <NavLink to="/about">О нас</NavLink>
      </div>
    );

};

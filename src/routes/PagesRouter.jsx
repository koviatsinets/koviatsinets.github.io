import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageHome } from '../pages/PageHome/PageHome';
import { PageCatalog } from '../pages/PageCatalog/PageCatalog';
import { PageCart } from '../pages/PageCart/PageCart';
import { PageAbout } from '../pages/PageAbout/PageAbout';
import { PageEdit } from '../pages/PageEdit/PageEdit';
import { PageNotefound } from '../pages/PageNotefound/PageNotefound';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/busket" element={<PageCart/>} />
        <Route path="/about" element={<PageAbout/>} />
        <Route path="/edit" element={<PageEdit/>} />
        <Route path="*" element={<PageNotefound/>} />
      </Routes>
    );
    
};
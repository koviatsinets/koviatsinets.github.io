import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageHome } from '../pages/PageHome/PageHome';
import { PageCatalog } from '../pages/PageCatalog/PageCatalog';
import { PageBusket } from '../pages/PageBusket/PageBusket';
import { PageAbout } from '../pages/PageAbout/PageAbout';
import { Error } from '../pages/Error/Error';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/busket" element={<PageBusket/>} />
        <Route path="/about" element={<PageAbout/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    );
    
};
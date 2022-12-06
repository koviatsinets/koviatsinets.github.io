import React from 'react'
import './PageCatalog.scss';

import { Card } from '../../components/Card/Card'
import { useSelector } from 'react-redux';

export const PageCatalog = () => {

  const market = useSelector( state => state.market );

  const productsCode = market.products.map(el => 
    <Card key={el.id} product={el}></Card>
  )

  return (
    <div className='PageCatalog'>
      {productsCode}
    </div>
  )
}
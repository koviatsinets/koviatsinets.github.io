import React, { useEffect, useState } from 'react'
import { clientEvents } from '../../events';
import { useSelector } from 'react-redux';
import './PageCatalog.scss';

import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { Sort } from '../../components/Sort/Sort'

export const PageCatalog = () => {

  const [filteredItems, setFilteredItems] = useState([]);
  const [filterProperties, setFilterProperties] = useState({
      themeCity: false,
      themeDuplo: false,
      themeFriends: false,
      ageTypeOne: false,
      ageTypeTwo: false,
      ageTypeThree: false
  })

  useEffect(() => {
    clientEvents.addListener('ESetFilterObj', setFilterItems);

    return () => {
      clientEvents.removeListener('ESetFilterObj', setFilterItems);

  }});

  const market = useSelector( state => state.market );

  const setFilterItems = obj => {
    setFilterProperties(obj)
  }

  const productsCode = market.products.map(el => 
    <Card key={el.id} product={el}></Card>
  )
    console.log(filterProperties)
  return (
    <div className='PageCatalog'>
      <Filter />
      <section className='Section'>
        <Sort />
        <div className='ItemsField'>
          {productsCode}
        </div>
      </section>
    </div>
  )
}
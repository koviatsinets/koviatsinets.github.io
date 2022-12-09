import React, { useEffect, useState } from 'react'
import { clientEvents } from '../../events';
import { useSelector } from 'react-redux';
import './PageCatalog.scss';

import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { Sort } from '../../components/Sort/Sort'

export const PageCatalog = () => {

  const market = useSelector( state => state.market );

  const [filterParams, setFilterParams] = useState({
      themeCity: false,
      themeDuplo: false,
      themeFriends: false,
      ageTypeOne: false,
      ageTypeTwo: false,
      ageTypeThree: false
  })

  const [sortParams, setSortParams] = useState({
    sort: 'name-up',
  })

  useEffect(() => {
    clientEvents.addListener('setFilterObj', setFilterParamsState);
    clientEvents.addListener('setSortObj', setSortParamsState);
    return () => {
      clientEvents.removeListener('setFilterObj', setFilterParamsState);
      clientEvents.removeListener('setSortObj', setSortParamsState);
  }});

  const setFilterParamsState = obj => {
    setFilterParams(obj)
  }

  const setSortParamsState = obj => {
    setSortParams(obj)
  }



  const filterAndSort = () => {
    let res = [];
    market.products.forEach(el => {
      if (filterParams.themeCity && el.series === 'City') {
        res.push(el)
        console.log('отработал сити')
      }
      if (filterParams.themeDuplo && el.series === 'Duplo') {
        res.push(el)
        console.log('отработал дупло')
      }
      if (filterParams.themeFriends && el.series === 'Friends') {
        res.push(el)
        console.log('отработал друзья')
      }
    })
    res.forEach(el => {
      if (sortParams.sort === 'name-up') {
        res.sort((a,b) => a.productName.localeCompare((b.productName)))
      }
      if (sortParams.sort === 'name-down') {
        res.sort((a,b) => b.productName.localeCompare((a.productName)))
      }
      if (sortParams.sort === 'price-up') {
        res.sort((a,b) => a.price - b.price)
      }
      if (sortParams.sort === 'price-down') {
        res.sort((a,b) => b.price - a.price)
      }
    })
      
    
    // if (filterParams.themeDuplo) {
    //   res = res.filter(item => item.series === 'Duplo')
    // }
    // if (filterParams.themeFriends) {
    //   res = res.filter(item => item.series === 'Friends')
    // }
    console.log(res)
    const result = res.map(el => 
      <Card key={el.id} product={el}></Card>
    )
    return result
  }

  // console.log(filterAndSort)
  // const productsCode = market.products.map(el => 
  //   <Card key={el.id} product={el}></Card>
  // )
    // console.log(market.products)
    console.log(sortParams)
  return (
    <div className='PageCatalog'>
      <Filter />
      <section className='Section'>
        <Sort />
        <div className='ItemsField'>
          {filterAndSort()}
        </div>
      </section>
    </div>
  )
}
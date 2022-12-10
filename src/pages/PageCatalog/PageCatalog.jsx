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
      ageTypeThree: false,
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

    let newArrSeries = [];
    let newArrAge = [];
    let newArrDetails = [];
    let newArrPrice = [];

    newArrSeries = market.products.slice();

    if (filterParams.themeCity || filterParams.themeDuplo || filterParams.Friends) {
      newArrSeries.forEach(el => {
        if ((filterParams.themeCity && el.series === 'City') ||
        (filterParams.themeDuplo && el.series === 'Duplo') ||
        (filterParams.themeFriends && el.series === 'Friends')){
          newArrAge.push(el)}
        }
          )
    } else {
      newArrAge = newArrSeries;
    } 
    if (filterParams.ageTypeOne || filterParams.ageTypeTwo || filterParams.ageTypeThree) {
      newArrAge.forEach(el => {
        if (((filterParams.ageTypeOne) && (el.fromAge > 0 && el.fromAge <= 3)) ||
        ((filterParams.ageTypeTwo) && (el.fromAge > 3 && el.fromAge <= 6)) ||
        ((filterParams.ageTypeThree) && (el.fromAge > 6 && el.fromAge <= 8)))
         newArrDetails.push(el)}) 
    } else {
      newArrDetails = newArrAge;
    } 
    

    newArrDetails.forEach(el => {
      if (sortParams.sort === 'name-up') {
        newArrDetails.sort((a,b) => a.productName.localeCompare((b.productName)))
      }
      if (sortParams.sort === 'name-down') {
        newArrDetails.sort((a,b) => b.productName.localeCompare((a.productName)))
      }
      if (sortParams.sort === 'price-up') {
        newArrDetails.sort((a,b) => a.price - b.price)
      }
      if (sortParams.sort === 'price-down') {
        newArrDetails.sort((a,b) => b.price - a.price)
      }
    })

    const result = newArrDetails.map(el => 
      <Card key={el.id} product={el}></Card>
    )

    return result

  }

  console.log(filterParams)
  
  return (
    <div className='PageCatalog'>
      <Filter filter={filterParams} />
      <section className='Section'>
        <Sort sort={sortParams}/>
        <div className='ItemsField'>
          {filterAndSort()}
        </div>
      </section>
    </div>
  )
}
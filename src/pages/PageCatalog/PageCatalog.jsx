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
      detailsFrom: '',
      detailsTo: Infinity,
      priceFrom: '',
      priceTo: Infinity,
  })

  const [sortParams, setSortParams] = useState({
    sort: 'name-up',
  })

  useEffect(() => {
    clientEvents.addListener('setFilterObj', setFilterParamsState);
    clientEvents.addListener('setSortObj', setSortParamsState);
    clientEvents.addListener('searchWithText', setSortParamsState);
    return () => {
      clientEvents.removeListener('setFilterObj', setFilterParamsState);
      clientEvents.removeListener('setSortObj', setSortParamsState);
      clientEvents.addListener('searchWithText', setSortParamsState);
  }});

  const setFilterParamsState = obj => {
    setFilterParams(obj)
  }

  const setSortParamsState = obj => {
    setSortParams(obj)
  }

  const filterAndSort = () => {

    let newArrTheme = [];
    let newArrAge = [];
    let newArrDetails = [];
    let newArrPrice = [];
    let newArrResult = [];

    newArrTheme = market.products.slice();

    if (filterParams.themeCity || filterParams.themeDuplo || filterParams.themeFriends) {
      newArrTheme.forEach(el => {
        if ((filterParams.themeCity && el.theme === 'City') ||
        (filterParams.themeDuplo && el.theme === 'Duplo') ||
        (filterParams.themeFriends && el.theme === 'Friends')){
          newArrAge.push(el)}
        }
          )
    } else {
      newArrAge = newArrTheme;
    } 

    if (filterParams.ageTypeOne || filterParams.ageTypeTwo || filterParams.ageTypeThree) {
      newArrAge.forEach(el => {
        if (((filterParams.ageTypeOne) && (el.age > 0 && el.age <= 3)) ||
        ((filterParams.ageTypeTwo) && (el.age > 3 && el.age <= 6)) ||
        ((filterParams.ageTypeThree) && (el.age > 6 && el.age <= 8)))
         newArrDetails.push(el)}) 
    } else {
      newArrDetails = newArrAge;
    } 

    if (filterParams.detailsFrom || filterParams.detailsTo) {
      newArrPrice = newArrDetails.filter(el => el.details >= filterParams.detailsFrom && el.details <= filterParams.detailsTo)
    } else {
      newArrPrice = newArrDetails;
    }

    if (filterParams.priceFrom || filterParams.priceTo) {
      newArrResult = newArrPrice.filter(el => el.price >= filterParams.priceFrom && el.price <= filterParams.priceTo)
    } else {
      newArrResult = newArrPrice;
    }

    newArrResult.forEach(el => {
      if (sortParams.sort === 'name-up') {
        newArrResult.sort((a,b) => a.prodName.localeCompare((b.prodName)))
      }
      if (sortParams.sort === 'name-down') {
        newArrResult.sort((a,b) => b.prodName.localeCompare((a.prodName)))
      }
      if (sortParams.sort === 'price-up') {
        newArrResult.sort((a,b) => a.price - b.price)
      }
      if (sortParams.sort === 'price-down') {
        newArrResult.sort((a,b) => b.price - a.price)
      }
    })

    const result = newArrResult.map(el => 
      <Card key={el.id} product={el}></Card>
    )

    return result

  }
  
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
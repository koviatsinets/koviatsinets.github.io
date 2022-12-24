import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDatabase, ref, set } from "firebase/database";


import './EditProduct.scss';

export const EditProduct = () => {

  

  const market = useSelector( state => state.market );
  const dispatch = useDispatch()

  const currentIdRef = useRef('')
  const nameRef = useRef('')
  const themeRef = useRef('')
  const ageRef = useRef('')
  const detailsRef = useRef('')
  const priceRef = useRef('')
  const imgUrlRef = useRef('')

  const editProducts = () => {
    let res = null;
    market.products.forEach(el => {
     if (el.id === Number(currentIdRef.current.value)) {
      res = el
     }
    })
    console.log(res)
  // const db = getDatabase();
  // const id = 1
  // await set(ref(db, 'products/0'), {
  //   price: 900,
  // });
  // console.log('товар добавлен')
  // ;  
  }

  return (
      <div className='EditProduct'>
        <p className='Title'>Изменить продукт</p>
        <div className='Row'>
          <p className='Text'>Введите id:</p>
          <input className='Input' ref={currentIdRef} onChange={editProducts}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Тема:</p>
          <input className='Input' ref={themeRef} ></input>
        </div>
        <div className='Row'>
          <p className='Text'>Название:</p>
          <input className='Input' ref={nameRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Возраст:</p>
          <input className='Input' ref={ageRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Кол-во деталей:</p>
          <input className='Input' ref={detailsRef}></input>
        </div>
        <div className='Row'>
          <p className='Text' ref={priceRef}>Стоимость:</p>
          <input className='Input'></input>
        </div>
        <div className='Row'>
          <p className='Text' ref={imgUrlRef}>URL</p>
          <input className='Input'></input>
        </div>
        <input type='button' className='Button' value={'Добавить'} ></input>
      </div>
  )
}
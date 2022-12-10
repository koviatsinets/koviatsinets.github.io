import React, { useRef, useState } from 'react'
import './Filter.scss'
import { clientEvents } from '../../events'
import { setFilterProp } from '../../redux/productsSlice';

export const Filter = props => {

const [checkedRadio, setCheckedRadio] = useState(null)

  const themeCityRef = useRef(false)
  const themeDuploRef = useRef(false)
  const themeFriendsRef = useRef(false)
  const ageTypeOneRef = useRef(false)
  const ageTypeTwoRef = useRef(false)
  const ageTypeThreeRef = useRef(false)

   const filterObj = age => {
    const obj = {
      themeCity: themeCityRef.current.checked,
      themeDuplo: themeDuploRef.current.checked,
      themeFriends: themeFriendsRef.current.checked,
      ageTypeOne: ageTypeOneRef.current.checked,
      ageTypeTwo: ageTypeTwoRef.current.checked,
      ageTypeThree: ageTypeThreeRef.current.checked,
    }
    clientEvents.emit("setFilterObj", obj)
  }

  // const checkRadio = () => {
  //   let res = null;
  //   [ageTypeOneRef, ageTypeTwoRef, ageTypeThreeRef].forEach(el => {
  //     if (el.current.checked === true) {
  //       res = el.current.value;
  //     }
  //   })
  //   console.log(res)
  //   filterObj(res);
  // }

  return (
    <aside className='Filter'>
        <p className='Title'>Подбор конструктора</p>
        <div className='Block'>
          <p>Серия:</p>
          <div className='Row'>
            <input type="checkbox" value={'City'} ref={themeCityRef} onChange={filterObj}/>
            <p>City</p>
          </div>
          <div className='Row'>
            <input type="checkbox" value={'Duplo'} ref={themeDuploRef} onChange={filterObj}/>
            <p>Duplo</p>
          </div>
          <div className='Row'>
            <input type="checkbox" value={'Friends'} ref={themeFriendsRef} onChange={filterObj}/>
            <p>Frinds</p>
          </div>
        </div>
        <div className='Block'>
          <p>Возраст:</p>
          <label>
            <input type="radio" name="radio" value={1} checked={props.filter.ageTypeOne} ref={ageTypeOneRef} onChange={filterObj} />0-3
          </label>
          <label>
            <input type="radio" name="radio" value={2} checked={props.filter.ageTypeTwo} ref={ageTypeTwoRef} onChange={filterObj} />3-6
          </label>
          <label>
            <input type="radio" name="radio" value={3} checked={props.filter.ageTypeThree} ref={ageTypeThreeRef} onChange={filterObj} />6-8
          </label>
        </div>
        <div className='Block'>
          <p>Детали</p>
        </div>
        {/* <div className='Block'>
          <p>Количество деталей:</p>
          <input type="range" min="0" max="100" step="10" value="30" />
        </div>
        <div className='Block'>
          <p>Цена:</p>
          <div className='Row'>
            <p>От</p>
            <input type="number" />
          </div>
          <div className='Row'>
            <p>До</p>
            <input type="number" />
          </div>
        </div> */}
    </aside>
  )
}

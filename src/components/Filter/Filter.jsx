import React, { useRef, useState } from 'react'
import './Filter.scss'
import { clientEvents } from '../../events'
import { setFilterProp } from '../../redux/productsSlice';

export const Filter = props => {

const [checkedRadio, setCheckedRadio] = useState(null)

  const themeCityRef = useRef(false)
  const themeDuploRef = useRef(false)
  const themeFriendsRef = useRef(false)
  const themeHarryPotterRef = useRef(false)
  const themeTechnicRef = useRef(false)
  const ageTypeOneRef = useRef(false)
  const ageTypeTwoRef = useRef(false)
  const ageTypeThreeRef = useRef(false)
  const ageTypeFourRef = useRef(false)
  const ageTypeFiveRef = useRef(false)
  const detailsFromRef = useRef('')
  const detailsToRef = useRef(Infinity)
  const priceFromRef = useRef('')
  const priceToRef = useRef(Infinity)

   const filterObj = () => {
    const obj = {
      themeCity: themeCityRef.current.checked,
      themeDuplo: themeDuploRef.current.checked,
      themeFriends: themeFriendsRef.current.checked,
      themeHarryPotter: themeHarryPotterRef.current.checked,
      themeTechnic: themeTechnicRef.current.checked,
      ageTypeOne: ageTypeOneRef.current.checked,
      ageTypeTwo: ageTypeTwoRef.current.checked,
      ageTypeThree: ageTypeThreeRef.current.checked,
      ageTypeFour: ageTypeFourRef.current.checked,
      ageTypeFive: ageTypeFiveRef.current.checked,
      detailsFrom: detailsFromRef.current.value,
      detailsTo: detailsToRef.current.value === ''? Infinity : detailsToRef.current.value,
      priceFrom: priceFromRef.current.value,
      priceTo: priceToRef.current.value === ''? Infinity : priceToRef.current.value, 
    }
    clientEvents.emit("setFilterObj", obj)
  }

  const resetObj = () => {
    const obj = {
      themeCity: false,
      themeDuplo: false,
      themeFriends: false,
      themeHarryPotter: false,
      themeTechnic: false,
      ageTypeOne: false,
      ageTypeTwo: false,
      ageTypeThree: false,
      ageTypFour: false,
      ageTypFive: false,
      detailsFrom: '',
      detailsTo: Infinity,
      priceFrom: '',
      priceTo: Infinity, 
    }
    clientEvents.emit("setFilterObj", obj)
  }

  return (
    <aside className='Filter'>
        <p className='Title'>Подбор конструктора</p>
        <div className='Block'>
          <p>По серии:</p>
          <div className='Row'>
            <input type="checkbox" checked={props.filter.themeCity} value={'City'} ref={themeCityRef} onChange={filterObj}/>
            <p>City</p>
          </div>
          <div className='Row'>
            <input type="checkbox" checked={props.filter.themeDuplo} value={'Duplo'} ref={themeDuploRef} onChange={filterObj}/>
            <p>Duplo</p>
          </div>
          <div className='Row'>
            <input type="checkbox" checked={props.filter.themeFriends} value={'Friends'} ref={themeFriendsRef} onChange={filterObj}/>
            <p>Friends</p>
          </div>
          <div className='Row'>
            <input type="checkbox" checked={props.filter.themeHarryPotter} value={'Harry-Potter'} ref={themeHarryPotterRef} onChange={filterObj}/>
            <p>Harry-Potter</p>
          </div>
          <div className='Row'>
            <input type="checkbox" checked={props.filter.themeTechnic} value={'Technic'} ref={themeTechnicRef} onChange={filterObj}/>
            <p>Technic</p>
          </div>
        </div>
        <div className='Block'>
          <p>По возрасту:</p>
          <label>
            <input type="radio" name="radio" value={1} checked={props.filter.ageTypeOne} ref={ageTypeOneRef} onChange={filterObj} />0-3
          </label>
          <label>
            <input type="radio" name="radio" value={2} checked={props.filter.ageTypeTwo} ref={ageTypeTwoRef} onChange={filterObj} />3-6
          </label>
          <label>
            <input type="radio" name="radio" value={3} checked={props.filter.ageTypeThree} ref={ageTypeThreeRef} onChange={filterObj} />6-8
          </label>
          <label>
            <input type="radio" name="radio" value={4} checked={props.filter.ageTypeFour} ref={ageTypeFourRef} onChange={filterObj} />8-12
          </label>
          <label>
            <input type="radio" name="radio" value={5} checked={props.filter.ageTypeFive} ref={ageTypeFiveRef} onChange={filterObj} />12-18
          </label>
        </div>
        <div className='Block'>
          <p>По кол-ву деталей:</p>
          <div className='Row'>
            <p>От</p>
            <input className='InputNumber' type="number" value={props.filter.detailsFrom} ref={detailsFromRef} onChange={filterObj}/>
          </div>
          <div className='Row'>
            <p>До</p>
            <input type="number" className='InputNumber' value={props.filter.detailsTo === Infinity? '' : props.filter.detailsTo} ref={detailsToRef} onChange={filterObj}/> 
          </div>
        </div>
        <div className='Block'>
          <p>По цене:</p>
          <div className='Row'>
            <p>От</p>
            <input type="number" className='InputNumber' value={props.filter.priceFrom} ref={priceFromRef} onChange={filterObj}/>
          </div>
          <div className='Row'>
            <p>До</p>
            <input type="number" className='InputNumber' value={props.filter.priceTo === Infinity? '' : props.filter.priceTo} ref={priceToRef} onChange={filterObj}/> 
          </div>
        </div>
        <div className='Block'>
          <input className='Button' type="button" onClick={resetObj} value='Сброс'/>
        </div>
    </aside>
  )
}

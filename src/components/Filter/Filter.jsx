import React, { useRef } from 'react'
import './Filter.scss'
import { clientEvents } from '../../events'

export const Filter = props => {

  const themeCityRef = useRef(false)
  const themeDuploRef = useRef(false)
  const themeFriendsRef = useRef(false)
  const ageTypeOneRef = useRef(false)
  const ageTypeTwoRef = useRef(false)
  const ageTypeThreeRef = useRef(false)

  const filterItems = () => {
    const obj = {
      themeCity: themeCityRef.current.checked,
      themeDuplo: themeDuploRef.current.checked,
      themeFriends: themeFriendsRef.current.checked,
      ageTypeOne: ageTypeOneRef.current.checked,
      ageTypeTwo: ageTypeTwoRef.current.checked,
      ageTypeThree: ageTypeThreeRef.current.checked
    }
    clientEvents.emit("ESetFilterObj", obj)
  }

  // const [theme, setTheme] = useState([]);
  // const [age, setAge] = useState(null);

  // const setStateTheme = eo => {
  //   let arr = [...theme]
  //   console.log(eo.target.checked)
  //   if (eo.target.checked === true) {
  //     arr.push(eo.target.value)
  //   }
  //   else {
  //     let index = arr.indexOf(eo.target.value)
  //     arr.splice(index, 1)
  //     }
  //   setTheme(arr)
  //   }
  //   // console.log(eo.target.value)
  //   // setTheme(eo.target.value)
  //   // clientEvents.emit("ESetStateTheme", eo.target.value)
  

  // const setStateAge = eo => {
  //   setAge(eo.target.value)
  //   clientEvents.emit("ESetStateAge", eo.target.value)
  // }

  // const setPieces = eo => {

  // }

  console.log('render Filter')
  return (
    <aside className='Filter'>
        <p className='Title'>Подбор конструктора</p>
        <div className='Block'>
          <p>Серия:</p>
          <div className='Row'>
            <input type="checkbox" value={'City'} ref={themeCityRef} onChange={filterItems}/>
            <p>City</p>
          </div>
          <div className='Row'>
            <input type="checkbox" value={'Duplo'} ref={themeDuploRef} onChange={filterItems}/>
            <p>Duplo</p>
          </div>
          <div className='Row'>
            <input type="checkbox" value={'Friends'} ref={themeFriendsRef} onChange={filterItems}/>
            <p>Frinds</p>
          </div>
        </div>
        <div className='Block'>
          <p>Возраст:</p>
          <label>
            <input type="radio" value="1" ref={ageTypeOneRef} onChange={filterItems} />0-3
          </label>
          <label>
            <input type="radio" value="2" ref={ageTypeTwoRef} onChange={filterItems} />3-6
          </label>
          <label>
            <input type="radio" value="3" ref={ageTypeThreeRef} onChange={filterItems} />6-8
          </label>
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

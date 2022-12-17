import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div>
        <p>&bull; Каталог</p>
        <p>&bull; Корзина</p>
        <p>&bull; Информация о магазине</p>
        <p>&bull; Кабинет</p>
      </div>
      <div>
        <p>Интернет-магазин конструкторов "LEGO"</p>
        <p>г. Минск, ул. Богдановича 143, ТЦ Империал, 1 этаж. Время работы: 10:00 - 20:00 без выходных</p>
        <p>Звоните нам: +375 29 529 43 11, +375 29 643 42 71</p>
        <p>E-mail: info@lego.by</p>
      </div>
      <div>
        <p>ООО "Лего" Свидетельство о государственной регистрации от 11 июля 2020. №1414125435. Зарегистрирован Администрацией Московского района г. Минска. Юр. адрес 224022, г. Минск, ул. Карьерная, 8/1, пом. 16. Зарегистрирован в Торговом реестре Республики Беларусь: №3232427 от 06.02.2017г.</p>
      </div>
    </footer>
  )
}
import React from 'react'
import './PageHome.scss';
import legoCityLogo from '../../assets/lego-city-logo.jpg';
import legoDuploLogo from '../../assets/lego-duplo-logo.jpg';
import legoFriendsLogo from '../../assets/lego-friends-jatek.jpg';
import legoHarryPotterLogo from '../../assets/lego-harry-potter-logo.jpg';
import legoTechnicLogo from '../../assets/lego-technic-logo.png';

export const PageHome = () => {
  return (
    <div className='PageHome'>
      <div className='Wrapper'>
        <div className='RowSeries'>
          <img className='Img' src={legoCityLogo} alt='city'></img>
          <div className='Text'>City — серия, выпускающаяся с 2005 года. Стала идейным продолжателем серии Town. Одна из основных линеек наборов Датской компании.</div>
        </div>
        <div className='RowSeries'>
        <div className='Text'>Линейка конструкторов, предназначенных для детей от 1,5 до 5 лет. Кубики Duplo в два раза длиннее, выше и шире традиционных кубиков Lego, что упрощает обращение с ними и снижает вероятность их проглатывания маленькими детьми. Несмотря на свой размер, они совместимы с традиционными кубиками Lego.</div>
          <img className='Img' src={legoDuploLogo} alt='city'></img>
        </div>
        <div className='RowSeries'>
          <img className='Img' src={legoFriendsLogo} alt='city'></img>
          <div className='Text'>Собирайте с подружками LEGO® Friends. Добро пожаловать в Хартлейк Сити, где с вами ждут знакомства Стефани, Мия, Оливия, Эмма и Андреа. Здесь ваш ребенок обязательно найдет похожего на себя персонажа и узнает, что способен достичь всего, что только пожелает, если будет следовать зову сердца и полагаться на друзей.</div>
        </div>
        <div className='RowSeries'>
        <div className='Text'>Серия игрушек Lego, базирующаяся на фильмах серии Гарри Поттер. Игрушки представляют собой модели важных сцен, транспортных средств и персонажей и созданы по мотивам первых пяти фильмов. Первые наборы появились в 2001 году после премьеры первого фильма «Гарри Поттер и философский камень». Последующие наборы выпускались одновременно с новыми фильмами, вплоть до фильма «Гарри Поттер и Орден Феникса».</div>
          <img className='Img' src={legoHarryPotterLogo} alt='city'></img>
        </div>
        <div className='RowSeries'>
          <img className='Img' src={legoTechnicLogo} alt='city'></img>
          <div className='Text'>Линейка соединительных пластиковых стержней и деталей Lego. Эта линейка предоставляет больше возможностей по созданию сложных конструкций в сравнении с более простыми в соединении классическими наборами Lego. Эта концепция была введена в 1977 году, а название Technic получила в 1982 году.</div>
        </div>
      </div>
    </div>
  )
}

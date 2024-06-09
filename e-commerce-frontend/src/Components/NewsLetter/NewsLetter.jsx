import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const handleButtonClick = () => {
    alert('Сіздің почтаңыз сәтті тіркелді. Ұсыныстарды күтіңіз');
  };

  return (
    <div className='newsletter'>
      <h1>Электрондық почтаға эксклюзивті ұсыныстар</h1>
      <p>Біздің ақпараттық бюллетеньге жазылыңыз және хабардар болыңыз.</p>
      <div>
        <input type="email" placeholder='Сіздің почтаңыздың адресі' />
        <button onClick={handleButtonClick}>Жазылу</button>
      </div>
    </div>
  )
}

export default NewsLetter

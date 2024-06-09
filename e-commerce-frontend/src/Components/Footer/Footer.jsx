import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Манго</p>
      </div>
      <ul className="footer-links">
        <li>Компания</li>
        <li>Тауарлар</li>
        <li>Офистар</li>
        <li>Біз туралы</li>
        <li>Контактілер</li>
      </ul>
      <div className="footer-copyright">
        <hr />
      </div>
    </div>
  )
}

export default Footer

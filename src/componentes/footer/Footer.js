import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Zamora Federico</h1>
            <p>La Rioja Argetina</p>
        </div>
        <div className='footer-contact'>
            <h3>Contactame</h3>
            <p>vamos a programar juntos</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                diseñada por Daltex
            </div>
        <div className='sns-links'>
            <a href="https://www.linkedin.com/in/federiconzamora-/" target="blank">
                <i className='fab fa-linkedin linkedin'></i>
            </a>
            <a href="https://github.com/Daltex-616" target="blank">
                <i className='fab fa-github github'></i>
            </a>
        </div>

        </div>
    </footer>
  )
}

export default Footer
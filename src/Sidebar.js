import React from 'react'
import logo from "./img/logo.png"
import check from "./img/check.png"
import books from "./img/books.png"
import two from "./img/2.png"
import three from "./img/3.png"
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src={logo} alt=""  />
        </div>
        <div className='process'>
            <ul>    
                <li><p className='points'>...</p></li>
                <li><p> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p> <img src={two} alt=""  /> Nos propositions</p></li>
                <li><p> <img src={three} alt=""  /> Paiement</p></li>
            </ul>
        </div>
        <div className='bottom-img'>
            <img src={books} alt=""  />
        </div>
    </div>
  )
}

import React from 'react'
import logo from "./logo.png"
import check from "./check.png"
import books from "./books.png"
import two from "./2.png"
import three from "./3.png"
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

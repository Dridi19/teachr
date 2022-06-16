import React from 'react'
import logo from "./img/logo.png"
import check from "./img/check.png"
import books from "./img/books.png"
import two from "./img/2.png"


export default function Secondsidebar() {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src={logo} alt=""  />
        </div>
        <div className='process'>
            <ul>    
                <li><p style={{fontSize:"22px"}}> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p style={{fontSize:"22px"}}> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p style={{fontSize:"22px"}}> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p style={{fontSize:"22px"}}> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p style={{fontSize:"22px"}}> <img src={check} alt=""  /> Votre demande</p></li>
                <li><p style={{fontSize:"22px"}}> <img src={two} alt=""  /> Nos propositions</p></li>
            </ul>
        </div>
        <div className='bottom-imgs'>
            <img src={books} alt=""  />
        </div>
    </div>
  )
}

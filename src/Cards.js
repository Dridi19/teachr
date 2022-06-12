import React from 'react'
import male from "./male.png"
import './cards.css';
import female from "./female.png"
export default function Cards() {
  return (
    <div className='Card-container'>
        <div className='card'>
            <div className='card-img'>
                <img src={male} width="30px" alt="" />
            </div>
            <div className='name'><p>Marie Dardel</p></div>
            <div className='stars'></div>
            <div className='hours-number'>20 heures données</div>
            <div className="informations">
                <ul>
                    <li><p>Hec,1ére année</p></li>
                    <li><p>Billingue</p></li>
                    <li><p>Diplome vérifié</p></li>
                    <li><p>Paris</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

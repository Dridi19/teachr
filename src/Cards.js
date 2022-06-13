import React from 'react'
import male from "./male.png"
import './cards.css';
import review from "./four-stars.png"
import diploma from "./dip.jpg"
import chat from "./chat.png"
import verified from "./verified.png"
import position from "./position.png"

export default function Cards() {
  return (
    <div className='Card-container'>
        <div className='card'>
            <div className="topinfo">
                <div className='card-img'>
                    <img src={male} alt="" />
                </div>
                <div className='name'><p>Marie Dardel</p></div>
                <div className='stars'> <img src={review} alt="" /> </div>
                <div className='hours-number'>20 heures données</div>
            </div>
            <div className="informations">
                <ul>
                    <li><p><img src={diploma} alt="" /> Hec,1ére année</p></li>
                    <li><p><img src={chat} alt="" /> Billingue</p></li>
                    <li><p><img src={verified} alt="" />  Diplome vérifié</p></li>
                    <li><p><img src={position} alt="" />  Paris</p></li>
                </ul>
            </div>
            <div className="card-description">
                <br />
                <p className='first-desc'>Description</p>
                <p className='second-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi repellat labore.</p>
            
                <input type="button" className='card-button' value="Choisir" />
                </div>
        </div>
    </div>
  )
}

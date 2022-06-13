import React from 'react'
import './content.css';
import Cards from "./Cards.js"
import male from "./male.png"
import female from "./female.png"
export default function Content() {
  return (
    <div className='content'>
        <div className='top'>
            <div className='top-sentence'>
                <p>En quelle matiére avez-vous besoin de d'aide?</p>
            </div>
            <div className='top-search'>
            <form role="search" id="form">
            <input type="text" id="query" name="q"
            placeholder="SVT,piano,anglais,math..."
            aria-label="Search through site content"></input>
            <button>
              <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
            </button>
          </form>

            </div>
            <div className='bot-sentence'>
                <p>Les Teach'rs dAnglais qui pourraient vous correspondre</p>
            </div>
        </div>
        <div className='cardsss'>
          <div className='cards-cont'>
          <Cards imgname={male} />
          <Cards imgname={female} />
          <Cards imgname={male}/>
        </div>
        </div>
        <div className="bot-buttons">
        <input type="button" value="PRECEDENT" />
        <input type="button" className='next-btn' value="SUIVANT" />
        </div>
    </div>
  )
}

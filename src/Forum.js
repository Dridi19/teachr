import React from 'react';
import './forum.css';
const Forum = () => {
    return (
        <div>
            <div className='askforhelp'> <p>Vous recontrez des difficultés ? <a style={{color:"blue"}}> Obtenez de l'aide </a> </p></div>
            <div className='almost'>
            <div className='almost-title'> <h2 style={{color:"blue"}} >Presque fini!</h2> </div>
            <div className='almost-paragraph'> <p>Une fois qu des Teach'rs aurnt répondu à votre annonce, vous aurez besoin d'un comple pour y répondre. <a style={{color:"black"}} > Prenons de l'avance ! </a></p> </div>
            </div>  
                <div className='account-forum'>
                
                        <form class="formp">
                        <div>
                        <div className='firstline'>
                        <p>Prénom</p>
                        <input type="text" placeholder="Prénom" class="textbox" />
                        </div>
                        <div className='firstline'>
                        <p>Nom</p>
                        
                        <input type="text" placeholder="Nom" class="textbox" />
                        </div>
                        </div>
                        <div>
                        <div className='firstline'>
                        <p>E-mail</p>
                        <input type="text" placeholder="E-mail" class="textbox" />
                        </div>
                        <div className='firstline'>
                        <p>No. Téléphone portable </p>
                        <input type="number" placeholder="Ex. 03 XX XX XX XX" class="textbox" />
                        </div>
                        </div>
                        <div>
                        <div className='firstline'>   
                        <p>Mot de passe</p>
                        <input type="password" placeholder="XXXXXXXX" class="textbox" />
                        </div>    
                        <div className='firstline'>                       
                        <p>Confirmation mot de passe</p>
                        <input type="password" placeholder="XXXXXXXX" class="textbox" />
                        </div>   
                        </div>
                        </form> 
                </div>
                <div className="bot-buttons" style={{justifyContent:"space-around"}}  >
        <input type="button" value="PRECEDENT"  />
        <input type="button" className='next-btn' value="SUIVANT" />
        </div>
        </div>
    );
}

export default Forum;

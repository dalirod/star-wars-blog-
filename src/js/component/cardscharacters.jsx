import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-svg-core/styles.css'

export const Cardscharacters = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
   
  
    

  }, [] )

  return (
    <>
  
      <div className="card-star">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.properties.name}</h5>
        <p className="">Gender:{props.item.properties.gender}</p>
        <p className="">Hair-Color:{props.item.properties.hair_color}</p>
        <p className=""> Eye-Color:{props.item.properties.eye_color}</p> 
        <Link to={`/tarjeta_characters/${props.item.uid}`}>
           <button className="btn btn-primary me-5"> Lear more!</button>
           </Link>
        <i className="fas fa-heart"></i> 
      </div>
    </div> 



    

      
      
    </>
  );
};


export default Cardscharacters;
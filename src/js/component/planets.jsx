import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tarjeta from "../views/tarjeta_planets"



export const Planets = (props) => {
    const [planets, setPlanets] = useState([]);


return(
<>
      <div className="card-star">
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">
            Population:{props.item.population}
          </p>
          <p>Terrain:{props.item.terrain}</p>
          <Link to="/tarjeta_planets">
           <button className="btn btn-primary me-5"> Lear more!</button>
           </Link>
           <i className="fas fa-heart"></i>
        
        </div>
      </div> 
      
    </>

)
}


export default Planets;
import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Tarjeta_planets = () =>{
const [tarjeta_planets, setTarjeta_planets] = useState([]);
  
const params=useParams()  
const { store, actions } = useContext(Context);
console.log(params)


return(
<>
 <div className="container">
      <div className="row">
        <div className="col">
          <img
            src=""
            className=""
            alt=""
          />
        </div>
        <div className="col">
          <h1>{}</h1>
          <p>{}</p>
        </div>
      </div>
      <div className="text-danger">
        <hr></hr>
        <div className="row"> 
            <div className="col">
                <p className="fw-bold">Name</p>
                <p>{}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Climate</p>
                <p>{}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Population</p>
                <p>{}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Rotation Period</p>
                <p>{}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Orbital Period</p>
                <p>{}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Diameter</p>
                <p>{}</p>
            </div>
        </div>
      </div>
    </div>   
            
            
                

</>

)
}
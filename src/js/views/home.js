import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cardscharacters from "../component/cardscharacters.jsx";
import Planets from "../component/planets.jsx";
import { Tarjeta_planets } from "./tarjeta_planets";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Home = () => {
  const{store,actions}=useContext(Context);

  useEffect(()=>{
    actions.getCharacters2()
  },[])
  
  return(
  
  <>
    <div>
      <h1 className="text-danger">Characters</h1>

      <div className="home-card-list text-center mt-5 container" >
      {store.characters2.map((people,index)=><Cardscharacters item={people}
      key={people.uid}
      />)}
      </div>
    </div>

    <div>
    <h1 className="text-danger">Planets</h1>

    <div className="home-card-list text-center mt-5 container">
    {store.planets.map((poblation)=><Planets item={poblation}
    key={poblation.name}
    />)}

    </div>
    </div>


  </>
)};

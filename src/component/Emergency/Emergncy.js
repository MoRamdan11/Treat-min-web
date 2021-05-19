import React from 'react'
import { Button } from 'react-scroll'
import "./Emergency.css";
import {NavBtnLink} from "../navbar/NavBarElement"


const Emergncy = () => {
    return (
        <div>
        <h1 className="header"> We are here to help you </h1>
        <h2 className="subheader">keep calm , call 123 then choose first aid to save human life or nearest hospital</h2>
        <img src={require("./Nursing home-bro.png").default} alt="loading..."  className="image"/>
        <div className="btn__container">
       <NavBtnLink className="btn"> First Aid</NavBtnLink></div>
       <div className="btn__container">
       <NavBtnLink to="/Emergency2" className="btn">Nearest Hospital</NavBtnLink>
        </div>
        </div>
    )
}

export default Emergncy

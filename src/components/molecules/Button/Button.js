import React from "react";
import "./Button.css";


const Button= ({icon, iconstyle, onClick})=>{
    return(
        <div className="btn">
            <button className={iconstyle} onClick={onClick}>{icon}</button>

        </div>
    )

};
export default Button;
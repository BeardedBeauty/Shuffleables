import React from "react";
import "./style.css";

function Cheese(props) {
    return (
        <div className="imgholder col s6 m4 l3 z-depth-3" onClick={() => props.handleClick(props.id)}>
            <img className="cliccimg" id={props.id} src={props.image} />
        </div>
    )
}

export default Cheese;
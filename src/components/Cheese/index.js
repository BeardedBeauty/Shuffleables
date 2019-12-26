import React from "react";
import "./style.css";

function Cheese(props) {
    return (
        <div className="holder col s6 m6 l3">
            <div className="imgholder z-depth-3" onClick={() => props.handleClick(props.id)}>
                <img className="cliccimg" id={props.id} src={props.image} />
            </div>
        </div>
    )
}

export default Cheese;
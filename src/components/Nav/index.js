import React from "react";

function Nav(props) {
    return (
        <nav className="nav-wrapper orange">
            <a href="#" className="brand-logo">cheeses, crust</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <a href="https://prtflo3.herokuapp.com/portfolio">John Ochs Portfolio</a>
                </li>
                <li>
                    <a href="https://github.com/BeardedBeauty/clickable">Github Repo</a>
                </li>
            </ul>
            <ul className="right">
                <li>
                    <h5>Guess: {props.guess} | </h5>
                </li>
                <li>
                    <h5>Score: {props.score} </h5>
                </li>
                <li>
                    <h5>|</h5>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
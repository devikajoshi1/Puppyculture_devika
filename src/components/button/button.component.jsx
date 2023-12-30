import React from "react";
import './button.styles.scss';
import { Link } from "react-router-dom";
const Button = () =>{
    return(
        <Link to='/shop'>
            <button className="shopproduct" > Shop </button>
        </Link>
    )
}

export default Button;
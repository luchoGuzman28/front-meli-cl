import React from "react";
import "./logo.css";
import logoImage from "../../assets/image/logo.png"


export default function Logo(props) {
 return (
        <a href="#">
            <img  src={logoImage}/>
        </a>
    );
}
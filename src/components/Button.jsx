import React from "react";

const Button = (props) => {
   let bgcolor = props.bgcolor
    return ( 
        <button type={props.type} disabled={props.disabled} style={{background: bgcolor,width: props.size}} className="ui-button">
            {props.text}
        </button>
    );
}
 
export default Button;
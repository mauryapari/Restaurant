import React from "react";
const Input = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.label}>{props.label}</label>
            <input className="input" {...props.properties} />
        </div>
    )
};

export default Input;
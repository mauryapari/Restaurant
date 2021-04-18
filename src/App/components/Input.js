import React from 'react';

export default function Input(props) {
    console.log(props);
    let inputElement = null;
    switch (props.value.elementType) {
        case 'input':
            inputElement = <input {...props.value.elementProperties} onChange={(e)=>props.onChangeHandler(e,props.value.elementName)}/>
            break;
        default:
            inputElement = <input {...props.value.elementProperties} onChange={(e)=>props.onChangeHandler(e,props.value.elementName)}/>
            break;
    }
    return(
        <div>
            <label>{props.value.elementProperties.name}</label>
            {inputElement }
        </div>
    )
}
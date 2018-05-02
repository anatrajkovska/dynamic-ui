import React from 'react';

function Field(props){
    let type = props.type
    if (type == 'string'){
        type = 'text'
    }else if (type == 'boolean'){
        type = 'checkbox'
    }
    return(
        <div>
            <label>{props.fieldKey}</label>
            <input required={props.required} type={type} />
        </div>        
    )
}

export default Field;
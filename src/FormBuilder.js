import React from 'react';
import Field from './Field';

function FormBuilder(props) {
    let fields = [];    
    for(let key in props.schema) {
        let value = props.schema[key]
        if(key == 'type' && value == 'mongodb'){
            continue
        }
        if(value.type == 'string' || value.type == 'number' || value.type == 'boolean' || value.elementType == 'string' 
            || value.elementType == 'number' || value.elementType == 'boolean'){
            fields.push(<Field fieldKey={key} type={value.type} required={value.required} />)
        }else if(value.type == 'object') {
            fields.push(<FormBuilder name={key} schema={value.properties}/>)
        }else if(value.type == 'map' && value.value.type === 'object') {
            fields.push(<FormBuilder name={key} schema={value.value.properties} />)
        }else if(value.type == "array"){
            fields.push(<FormBuilder name={key} schema={value.elementProperties} />)
        }
    }

    return(
        <fieldset >
        <legend>{props.name}</legend>
        {fields.map(item => {
            return item;
        })}</fieldset>
    )
}

export default FormBuilder;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputVal,SetinputVal] = useState(''); //Si no damos un string vacio nos da error de 'undefined'
    
    const handleInputChange = (e) => {
        console.log(e.target.value);
        SetinputVal(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if(inputVal.trim().length > 2){
            //setCategorias en Callback el primer argumento es el valor anterior
            setCategorias(cat => [inputVal,...cat,]);
            SetinputVal('');
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputVal}    
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired,
}

import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {

//const categorias = ['Metal Gear', 'Clone Wars', 'Bioshock Infinite'];
//Como categorias es constante y necesitamos cambiarlo, mejor
//Nos traemos este dato como Hooks y usamos un useState
    const [categorias,setCategorias] = useState(['Bioshock Infinite']);

    //Esto es solo un ejemplo de como agregar más elm a un Arr de useState
    const handleAddExample = () => {
        const add = 'Red Dead Redemption';
        //categorias.push(add);
        //mandarle el nuevo categorías no renderiza bien por alguna razón
        //Es mejor hacerlo así...
        
        setCategorias([add,...categorias]);
        //Otra forma de traerlo es con callback
        //setCategorias(cats => [...categorias,add]);
    };

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr />

        <ol>
            { 
                categorias.map((cat) => {
                    return <GifGrid key={cat} categoria={cat}/>
                })
            }
        </ol>
        </>
    );
}

export default GifExpertApp;



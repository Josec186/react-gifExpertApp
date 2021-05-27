//NO importaremos React ya que no 
//Devolvemos JSX 

import {useEffect, useState} from 'react';
import {getGif} from '../helpers/getGifs'


export const useFetchGifs = (categoria) => {
    const[state,setState] = useState({
        data: [],
        loading: true
    });

    //CustomHooks también tienen efectos. En este caso lo llamaremos
    //Ya que solo queremos que se dispare si la categoría cambia
    //Aquí es donde cambie el cuerpo mandará a renderizar
    useEffect(() => {
        getGif(categoria)
        .then(imgs => {
            setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false,
                });

            }, 500)


        });
    }, [categoria]);

   

    return state; // 
}
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGif } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({categoria}) => {
    
    //Este código hace que solo se renderice la función 
    //getGif() cuando se renderiza todo por primera vez
    //o cambia "categoria". En este caso NO CAMBIA EL PARAMETRO "categoria" pero si puede cambiar el valor de este 
     /* 
    useEffect(() => {
        getGif(categoria)
        .then(imgs => setImages(imgs));
    }, [categoria]);

    const [images,setImages] = useState([]);
    */

    /*
    Con lo que tenemos actualmente podemos moverlo a un
    Custom Hook. Este hará que cuando cargue el componente
    se manda a llamar el fetch y dirá que está cargando
    Cuando termine todo que se muestre
    */
    //Usando ahora CustomHooks
    const {data:images,loading} = useFetchGifs(categoria);


    /* 
    Este código lo pasamos a /helpers/getGifs
    ya que esta función no necesita estar aquí,
    de esta manera hacemos todo más por componenetes
    const getGif = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q='+encodeURI(categoria)+'&limit=10&api_key=ddkG6U6Jpk9p2l9FvzeAo9BwjZVHvUUP';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id : img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setImages(gifs);
    }
    */

    return (
        <>
        <h3>{categoria}</h3>
        
        {loading && <p className="animate__animated animate__fadeIn animate_delay_1s">loading...</p>}
        
        <div className="card-grid ">
        {
            images.map(img => {
                return(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                );
            })
        }
        </div>
        
        </>
    );

};
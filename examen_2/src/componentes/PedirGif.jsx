import React from "react";
import { useState,useEffect } from "react";
import { Gif } from "./Gif";

export const PedirGif = ({gif}) => {


    const [images,setImagen] = useState([])

        useEffect( () => {
            getGifs();
    }, [])

    const getGifs = async() => {
        //const url=`https://api.giphy.com/v1/gifs/trending?api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ`
        const url=`https://api.giphy.com/v1/gifs/search?api_key=WOhpSaZQvEjQvmz0gevAItBzCEHbSoa4q&q=${gif}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        //const url=`api.giphy.com/v1/gifs/search?limit=10&api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ&q=naruto`
        //api.giphy.com/v1/gifs/search?limit=10&api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifst = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifst)
        setImagen(gifst)

    }

    return(
        <>
            <div className="contenedor_img">
                <h3>{gif}</h3>
                
                    {
                        images.map( img => (
                            <Gif 
                                {...img}
                                key={img.id}
                            />
                        ))
                    }              
            </div>
        </>
    )
}
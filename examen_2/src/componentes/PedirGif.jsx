import React from "react";
import { useState,useEffect } from "react";
import { Gif } from "./Gif";

export const PedirGif = ({gif, id, title, url}) => {


    const [images,setImagen] = useState([])

        useEffect( () => {
            getGifs();
    }, [])

    const getGifs = async() => {
        const url="https://api.giphy.com/v1/gifs/trending?api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ"
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
            <div>
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
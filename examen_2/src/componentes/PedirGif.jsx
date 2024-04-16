import React from "react";
import { useState,useEffect } from "react";

export const PedirGif = ({gif}) => {


    const [imagen,setImagen] = useState([])

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url="https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ"
        const respuesta = await fetch(url);
        const {datos} = await respuesta.json();

        const gifs = datos.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs)
        setImagen(gifs)

    }

    return(
        <>
            <div>
                <h3>{gif}</h3>
                <ol>
                    {
                        imagen.map( ({id, title}) => (
                            <li key={id}>{title}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
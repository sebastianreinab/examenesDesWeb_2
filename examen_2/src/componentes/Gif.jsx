import React from "react";

export const Gif = ({ title, url }) => {
    
    console.log( title, url)

    return(
        <>
            <div>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </>
    )
}
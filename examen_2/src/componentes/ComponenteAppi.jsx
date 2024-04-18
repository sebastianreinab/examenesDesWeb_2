import { useState } from "react"
import { VerGift } from "./VerGift";
import { PedirGif } from "./PedirGif";

export const ComponenteAppi =  () => {


    const [gifs,setGifs] = useState([]);

    return(
        <>
            <header>
                <h2>busque su gif</h2>
            </header>
            <VerGift setGifs={setGifs}/>
            <hr/>
            <ol>
                {
                    gifs.map(
                        (gif, key) =>
                            {
                               return  <PedirGif 
                                    key={gif}
                                    gif={gif}/>
                            }        
                        )
                }
            </ol>
        </>
    )
}
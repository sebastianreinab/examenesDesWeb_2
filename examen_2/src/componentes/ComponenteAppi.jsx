import { useState } from "react"
import { VerGift } from "./VerGift";
import { PedirGif } from "./PedirGif";

export const ComponenteAppi =  () => {


    const [gifs,setGifs] = useState([]);

    return(
        <>
        
            <header className="head">
                <h2>busque su gif</h2>
                <VerGift setGifs={setGifs}/>
            </header>
            
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
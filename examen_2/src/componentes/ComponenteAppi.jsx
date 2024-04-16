import { useState } from "react"
import { VerGift } from "./VerGift";

export const ComponenteAppi =  () => {

    //const[gif, setGif] = useState([]);

    const [categories,setCategories] = useState([]);

    const handleAdd = () =>{
        setCategories([...categories, ''])
    }

    

    return(
        <>
            <h2>busque su gif</h2>
            <VerGift/>
            <hr/>
            <button onClick={() => handleAdd()}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
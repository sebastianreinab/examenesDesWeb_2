import { useState } from "react"

export const VerGift = ({setGifs}) => {

    const [algo, setAlgo] = useState("")

    const valorCambio = (e) => {
        setAlgo(e.target.value);
    }

    const buscar = (e) => {
        e.preventDefault();

        if(algo.trim().length > 2) {
            setGifs(gif => [...gif, algo]);
            setAlgo("");
        }
        
    }

    return(
        
        <div className="busqueda"> 
        
        <form onSubmit={buscar}>
            <input 
                type="text"
                value={algo}
                onChange={ valorCambio}
                placeholder="Buscar"
            />
        </form>
        </div>
    )
}
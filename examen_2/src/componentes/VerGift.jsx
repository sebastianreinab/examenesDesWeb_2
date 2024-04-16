import { useState } from "react"

export const VerGift = () => {

    const [algo, setAlgo] = useState("buscar")

    const valorCambio = (e) => {
        setAlgo(e.target.value);
    }

    const buscar = (e) => {
        e.preventDefault();
        console.log("busqueda hecha");
    }

    return(
        <form onSubmit={buscar}>
            <input 
                type="text"
                value={algo}
                onChange={ valorCambio}
            />
        </form>
    )
}
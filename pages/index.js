import { useState } from "react"


function home(){
    return (
        <div>
            <h1>HOME</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(0)

    function adicionar() {
        setContador(contador+1)
    }
    
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionar}>adicionar</button>
        </div>
    )
}

export default home
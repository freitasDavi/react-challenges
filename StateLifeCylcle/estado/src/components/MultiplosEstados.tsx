import { useState } from "react";


export function MultiplosEstados() {
    const [cliques, setCliques] = useState(0);
    const [turn, setTurn] = useState<string>("OFF");

    const handleClick = () => {
        setTurn(turn == "OFF" ? "ON" : "OFF")
        setCliques(cliques + 1);
    }

    return (
        <div>
            <h5>Switch: {turn}</h5>
            <h6>Número de vezes clicadas: {cliques}</h6>
            <button onClick={handleClick}>Turn</button>
        </div>
    )
}
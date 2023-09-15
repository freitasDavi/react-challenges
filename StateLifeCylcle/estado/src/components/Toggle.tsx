import { useState } from "react";


export function Toggle() {
    const [turn, setTurn] = useState<string>("OFF");

    return (
        <div>
            <h5>Switch: {turn}</h5>
            <button onClick={() => setTurn(turn == "OFF" ? "ON" : "OFF")}>Turn</button>
        </div>
    )
}
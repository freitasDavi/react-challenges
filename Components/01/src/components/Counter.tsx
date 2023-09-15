import { useState } from "react";



export function Counter() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <h6>Contador</h6>
            <input value={value} disabled />
            <button onClick={() => setValue(value + 1)}>Add</button>
        </div>
    )

}
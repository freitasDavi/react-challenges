import { useEffect, useState } from "react"



export function Clock() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <h5>Horário de Brasília {time.toTimeString()}</h5>
    )
}
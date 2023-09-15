import { useEffect, useState } from "react";


export function VerificarLargura() {
    const [largura, setLargura] = useState<number>(window.innerWidth);

    useEffect(() => {

        const handleResize = () => setLargura(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)

    }, [])


    return (
        <div>
            Largura da tela {largura}
        </div>
    )
}
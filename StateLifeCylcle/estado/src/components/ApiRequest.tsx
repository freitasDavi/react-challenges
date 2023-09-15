import { useEffect, useState } from "react";



export function ApiRequest() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>Carregando....</div>
            ) : (
                <div>Dados carregados com sucesso</div>
            )}
        </div>
    )
}
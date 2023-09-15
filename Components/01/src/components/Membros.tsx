import { Usuario, UsuarioProps } from "./Usuario";

export function Membros({ membros }: { membros: UsuarioProps[] }) {
    return (
        <ul>
            {membros.map((membro, idx) => (
                <li key={idx}>
                    <Usuario idade={membro.idade} name={membro.name} trabalha={membro.trabalha} />
                </li>
            ))}
        </ul>
    )
}
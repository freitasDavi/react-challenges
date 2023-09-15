export interface UsuarioProps {
    name: string, idade: number, trabalha: boolean
}

export function Usuario({ name, idade, trabalha }: UsuarioProps) {
    return (
        <div>
            Nome: {name} <br />
            Idade: {idade} anos <br />
            {trabalha ? ('Trabalha') : 'Não trabalha'}
        </div>
    )
}
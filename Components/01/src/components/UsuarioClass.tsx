import { Component } from "react"
import { UsuarioProps } from "./Usuario";

class UsuarioClass extends Component<UsuarioProps> {

    render() {
        const { name, idade, trabalha } = this.props;

        return (
            <div>
                Nome: {name} <br />
                Idade: {idade} anos <br />
                {trabalha ? ('Trabalha') : 'Não trabalha'}
            </div>
        )
    }

}

export default UsuarioClass
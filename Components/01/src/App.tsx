import './App.css'
import { Counter } from './components/Counter'
import { HelloWorld } from './components/HelloWorld'
import { Membros } from './components/Membros'
import { Saudacao } from './components/Saudacao'
import { Usuario, UsuarioProps } from './components/Usuario'
import UsuarioClass from "./components/UsuarioClass";

const membros: UsuarioProps[] = [
  {
    idade: 25,
    name: 'Davi',
    trabalha: true
  },
  {
    idade: 23,
    name: 'Daniela',
    trabalha: true
  },
  {
    idade: 14,
    name: 'Joao',
    trabalha: false
  },
]

function App() {

  return (
    <>
      <h2>1 - Criando um componente simples </h2>
      <HelloWorld />
      <hr />
      <h2>2 - Usando props</h2>
      <Saudacao name='Davi' />
      <hr />
      <h2>3 - Multiplas props</h2>
      <Usuario name='Davi' idade={25} trabalha />
      <hr />
      <h2>4 - Composição de componentes</h2>
      <Membros membros={membros} />
      <hr />
      <h2>5 - Componente de classe</h2>
      <UsuarioClass name='Davi' idade={25} trabalha />
      <hr />
      <h2>6 - Componente com estado</h2>
      <Counter />
    </>
  )
}

export default App

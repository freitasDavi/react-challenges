
import './App.css'
import { ApiRequest } from './components/ApiRequest'
import { Clock } from './components/Clock'
import { MultiplosEstados } from './components/MultiplosEstados'
import { TodoList } from './components/TodoList'
import { TodoListFilter } from './components/TodoListFilter'
import { Toggle } from './components/Toggle'
import { VerificarLargura } from './components/VerificarLargura'

function App() {
  return (
    <div>
      <h2>1 - Usando estado</h2>
      <Toggle />
      <hr />
      <h2>2 - Multiplos estados</h2>
      <MultiplosEstados />
      <hr />
      <h2>3 - Relógio em tempo real</h2>
      <Clock />
      <hr />
      <h2>4 - Todo list</h2>
      <TodoList />
      <hr />
      <h2>5 - Filtered todo list</h2>
      <TodoListFilter />
      <hr />
      <h2>6 - Verificar largura</h2>
      <VerificarLargura />
      <hr />
      <h2>7 - Chamando a API</h2>
      <ApiRequest />
      <hr />
    </div>
  )
}

export default App

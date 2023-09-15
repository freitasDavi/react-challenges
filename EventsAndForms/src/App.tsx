import './App.css'
import { DynamicForm } from './components/DynamicForm'
import { RegisterForm } from './components/RegisterForm'

function App() {

  return (
    <div>
      <h2>1 - Formulário de registro</h2>
      <RegisterForm />
      <hr />
      <h2>2 - Formulário dinâmico</h2>
      <DynamicForm />
      <hr />
    </div>
  )
}

export default App

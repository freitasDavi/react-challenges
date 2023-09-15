import { useState } from "react"

type TodoItem = {
    id: number,
    item: string
}

export function TodoListFilter() {
    const [filter, setFilter] = useState<string>("");
    const [nextId, setNextId] = useState(0);
    const [newTask, setNewTask] = useState<string>("");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [filteredTodo, setFilteredTodo] = useState<TodoItem[]>([]);

    const addNewTask = () => {
        const test = [...todoList, {
            id: nextId,
            item: newTask
        }]

        setTodoList(test);

        setNewTask("");
        setNextId(nextId + 1);
        setFilteredTodo(test);
    }

    const filterTasks = () => {
        const filteredTasks = todoList.filter((t) => t.item.toLowerCase().includes(filter.toLowerCase()));


        setFilteredTodo(filteredTasks);
    }

    return (
        <div>
            <fieldset>
                <legend>Filtro</legend>
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} onBlur={filterTasks} />
            </fieldset>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addNewTask}>Adicionar</button>

            <ul>
                {todoList ? (
                    filteredTodo.map((todo) => (
                        <li key={todo.id}>
                            {todo.item}
                        </li>
                    ))
                ) : null}
            </ul>
        </div>
    )

}
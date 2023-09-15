import { useState } from "react"

type TodoItem = {
    id: number,
    item: string
}

export function TodoList() {
    const [nextId, setNextId] = useState(0);
    const [newTask, setNewTask] = useState<string>("");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    const addNewTask = () => {
        setTodoList((a) => [...a, {
            id: nextId,
            item: newTask
        }]);

        setNewTask("");
        setNextId(nextId + 1);
    }

    return (
        <div>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addNewTask}>Adicionar</button>

            <ul>
                {todoList ? (
                    todoList.map((todo) => (
                        <li key={todo.id}>
                            {todo.item}
                        </li>
                    ))
                ) : null}
            </ul>
        </div>
    )

}
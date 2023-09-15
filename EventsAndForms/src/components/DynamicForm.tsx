import { FormEvent, useState } from "react"


export function DynamicForm() {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [fields, setFields] = useState<string[]>([""]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({
            email,
            senha
        })
    }

    function onChangeMultipleText(value: string, idx: number) {
        const newFieldValue = [...fields];
        newFieldValue[idx] = value;

        setFields(newFieldValue);
    }

    function addField() {
        setFields([...fields, ""]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label htmlFor="senha">
                Senha
                <input id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
            </label>
            {fields.map((field, idx) => (
                <label htmlFor={`${field}-${idx}`} key={idx}>
                    Field {idx + 1}
                    <input id={`${field}-${idx}`} type="text" value={field} onChange={e => onChangeMultipleText(e.target.value, idx)} />
                </label>
            ))}
            <button onClick={addField} type="button">new field</button>
            <button type="submit">Login</button>
        </form>
    )
}
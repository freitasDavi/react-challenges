import { FormEvent, useState } from "react"


export function RegisterForm() {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({
            email,
            senha
        })
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
            <button type="submit">Login</button>
        </form>
    )
}
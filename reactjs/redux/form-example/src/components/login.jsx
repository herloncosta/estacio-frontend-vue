import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeUser } from "../redux/user-slice"

export function Login() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(changeUser(name))
    }
    
    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)}/>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </>
    )
}

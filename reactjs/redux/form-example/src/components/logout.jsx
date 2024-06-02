import { useState } from 'react'
import { logout } from '../redux/user-slice'
import { useDispatch } from 'react-redux'

export function Logout() {
    const [name, ] = useState('')
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout(name))
    }

    return (
        <>
            <div>
                <h1>Logout</h1>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

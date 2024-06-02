import { useSelector } from "react-redux"
import { selectUser } from "../redux/user-slice"

export function User() {
    const { name } = useSelector(selectUser)
    return <>
        <strong><h1>User: {name}</h1></strong>
    </>
}
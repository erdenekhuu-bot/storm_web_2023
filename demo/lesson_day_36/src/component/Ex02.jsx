import { useState, useEffect } from "react";

const Ex02 = function () {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async function () {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
                const jsonData = await response.json()
                console.log(jsonData);
                setUsers(jsonData)
            } catch (error) {
                console.log(error);
            }

        }
        fetchUsers()
    })
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Ex02
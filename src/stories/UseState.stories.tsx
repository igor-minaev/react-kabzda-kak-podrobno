import React from "react"
import {useState} from "react"

export default {
    title: 'useState demo'
}



export const Example1 = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        setUsers([...users, `Sveta ${new Date().getTime()}`])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
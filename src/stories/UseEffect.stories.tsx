import {useEffect, useState} from "react"

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
        // api.getUsers()
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    },[counter]);


    return <>
      Hello, {counter}
        <button onClick={() => setFake( fake + 1)}>+</button>
    </>
}
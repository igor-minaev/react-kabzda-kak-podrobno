import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++

                const fakeValue = crypto.randomUUID()
                console.log(fakeValue)
            }
            temp = temp * i
        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('helps to react memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, `Sveta ${new Date().getTime()}`])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        < Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<string[]>(['react', 'js', 'html', 'css'])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => {
        setBooks([...books, `angular ${new Date().getTime()}`])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addBook}>add book</button>
        {counter}
        < Books books={newArray}/>
    </>
}


const BooksSecret = (props: { books: string[] }) => {
    console.log('books')
    return <div>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)
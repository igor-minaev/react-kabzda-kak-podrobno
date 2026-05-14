import {useState} from "react"

export default {
    title: 'useState demo'
}


function generateData() {
    console.log('generate data')
    return 1
}

export const Example1 = () => {

    console.log('example')

    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    // const changer = (state:number) => state + 1

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*<button onClick={() => setCounter(changer)}>+</button>*/}
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}
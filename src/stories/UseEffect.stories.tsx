import {useEffect, useState} from "react"

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake( fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter( counter + 1)}>counter+</button>*/}
    </>
}

export const Watches = () => {


    console.log('Watches')

    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    const [second, setSecond] = useState(new Date().getSeconds())

    useEffect(() => {
        const timeInterval = setInterval(() => {
            console.log('interval counting')
            setHour(new Date().getHours())
            setMinute(new Date().getMinutes())
            setSecond(new Date().getSeconds())
        }, 1000)
        return () => {
            console.log('cleanup');
            clearInterval(timeInterval)
        }
    }, [])


    const getFormattedTime = (time: number) => {
        return time < 10 ? `0${time}` : `${time}`
    }


    return <>
        {getFormattedTime(hour)}:{getFormattedTime(minute)}:{getFormattedTime(second)}
    </>
}

export const ClearIntervalExample = () => {
    const [show, setShow] = useState(true)
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Спрятать часы' : 'Показать часы'}
            </button>
            {show && <Watches/>}
        </div>
    )
}



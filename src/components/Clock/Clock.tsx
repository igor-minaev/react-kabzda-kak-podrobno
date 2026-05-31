import {useEffect, useState} from "react";

const getFormatedTime = (time: number) => time < 10 ? `0${time}` : time

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, []);


    return (
        <div>
            <span>{getFormatedTime(date.getHours())}</span>
            :
            <span>{getFormatedTime(date.getMinutes())}</span>
            :
            <span>{getFormatedTime(date.getSeconds())}</span>
        </div>
    )
}
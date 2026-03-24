// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

import {useState} from "react";

export function UncontrolledRating() {
    console.log("UncontrolledRating rendered")
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <div>

            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>

    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    const onClickHandler = () => props.setValue(props.value)
    return <span onClick={onClickHandler}> {props.selected ? <b>star</b> : "star"}  </span>
}
import {useReducer} from "react";
import {reducer} from "./reducer.tsx";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            {/*<AccordionTitle onClick={() => setCollapsed(!collapsed)} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    const onClickHandler = () => props.onClick()
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion
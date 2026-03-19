import {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle setCollapsed={() => setCollapsed(!collapsed)} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    const onClickHandler = () => props.setCollapsed()
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
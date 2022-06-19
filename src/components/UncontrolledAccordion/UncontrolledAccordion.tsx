import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle onClick={() => {
                setCollapsed(!collapsed)
            }} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionPropsTitle = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionPropsTitle) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClick}>--{props.title}--</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


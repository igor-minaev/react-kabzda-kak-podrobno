import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle  onChange={props.onChange} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionPropsTitle = {
    title: string
    onChange:()=>void
}

function AccordionTitle(props: AccordionPropsTitle) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onChange}>--{props.title}--</h3>
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


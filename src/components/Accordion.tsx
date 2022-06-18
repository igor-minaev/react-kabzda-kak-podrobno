import React from "react";

type AccordionPropsType={
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if(props.collapsed){
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </>
        )
    } else {
        return  <AccordionTitle title={props.titleValue}/>
    }

}

type AccordionPropsTitle={
    title: string
}

function AccordionTitle(props: AccordionPropsTitle) {
    debugger
    console.log('AccordionTitle rendering')
    return <h3>--{props.title}--</h3>
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


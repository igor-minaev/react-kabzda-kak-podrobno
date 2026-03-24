type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={props.onClick}>{props.title}</h3>
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

export default Accordion
import './App.css'
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating, type RatingValueType} from "./components/Rating/Rating.tsx";
import OnOff from "./components/OnOff/OnOff.tsx";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";
import {useState} from "react";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff.tsx";


function App() {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onValue, setOnValue] = useState<boolean>(false)

    return (
        <div className="App">
            Article 1
            <PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue="Menu" collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <OnOff on={onValue} onChange={setOnValue}/>
            Article 2
            <UncontrolledOnOff onChange={setOnValue}/> {onValue.toString()}
            <UncontrolledAccordion titleValue="Menu"/>
            <UncontrolledAccordion titleValue="Users"/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <div>{props.title}</div>
}


export default App

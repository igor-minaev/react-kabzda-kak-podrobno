import './App.css'
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating, type RatingValueType} from "./components/Rating/Rating.tsx";
import OnOff from "./components/OnOff/OnOff.tsx";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";
import {useState} from "react";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff.tsx";
import {Select} from "./components/Select/Select.tsx";


function App() {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onValue, setOnValue] = useState<boolean>(false)
    const [value, setValue] = useState<number>(1)

    return (
        <div className="App">
            {/*Article 1*/}
            {/*<PageTitle title="This is APP component"/>*/}
            {/*<PageTitle title="My friends"/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue="Menu" collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]} onClick={()=>{}}/>*/}
            {/*<OnOff on={onValue} onChange={setOnValue}/>*/}
            {/*Article 2*/}
            {/*<UncontrolledOnOff onChange={setOnValue}/> {onValue.toString()}*/}
            {/*<UncontrolledAccordion titleValue="Menu"/>*/}
            {/*<UncontrolledAccordion titleValue="Users"/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            <Select value={value} onChange={setValue} items={[{value: 1, title: 'Minsk'},
                {value: 2, title: 'Moscow'}, {value: 3, title: 'Kiev'}]}/>
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

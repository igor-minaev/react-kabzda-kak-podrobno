import './App.css'
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";
import OnOff from "./components/onOff/OnOff.tsx";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";


function App() {
    console.log("App rendered")
    return (
        <div className="App">
            <PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Users" collapsed={false}/>
            Article 2
            <Rating value={4}/>
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue="Menu"/>
            <UncontrolledAccordion titleValue="Users"/>
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

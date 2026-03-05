import './App.css'
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

// function hello() {
//     // eslint-disable-next-line no-debugger
//     debugger
//     alert("hello Im Igor")
// }

// hello()

function App() {
    console.log("App rendered")
    return (
        <div>
            <PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title="Menu"/>
            <Accordion title="Friends"/>
            Article 2
            <Rating value={4}/>
        </div>
    )
}

function PageTitle(props) {
    console.log("PageTitle rendered")
    return <div>{props.title}</div>
}



export default App

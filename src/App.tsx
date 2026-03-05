import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";

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
            <AppTitle/>
            <Raiting/>
            <Accordion/>
            <Raiting/>
        </div>
    )
}

function AppTitle() {
    console.log("AppTitle rendered")
    return <>This is APP component</>
}

function Raiting() {
    console.log("Rating rendered")
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>

    )
}

function Star() {
    console.log("Star rendered")
    return <div>star</div>
}



export default App

import './App.css'

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

function Accordion() {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendered")
    return <h3>Menu</h3>
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

export default App

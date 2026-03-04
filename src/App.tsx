import './App.css'

// function hello() {
//     // eslint-disable-next-line no-debugger
//     debugger
//     alert("hello Im Igor")
// }

// hello()

function App() {
    // eslint-disable-next-line no-debugger
    debugger
    return (
        <div>
            <div>This is APP component</div>
            <Raiting/>
            <Raiting/>
            <Accordion/>
        </div>
    )
}

function Raiting() {
    // eslint-disable-next-line no-debugger
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}

function Star() {
    return <div>star</div>
}

function Accordion() {
    // eslint-disable-next-line no-debugger
    debugger
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App

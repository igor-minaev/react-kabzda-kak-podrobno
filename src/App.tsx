import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    debugger
    return (

        <div>
            This is APP component
            <Raiting/>
            <Accordion/>
        </div>

    )
        ;
}

function Raiting() {
    debugger
    return (
        <Star/>
    )
}

function Star(){
    return(
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}

function Accordion() {
    debugger
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;

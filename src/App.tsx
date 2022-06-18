import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    console.log('App rendering')
    return (

        <div>
            <AppTitle/>
            <Raiting/>
            <Accordion/>
            <Raiting/>
        </div>

    )
        ;
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

function Raiting() {
    console.log('Raiting rendering')
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
    console.log('Star rendering')
    return <div>star</div>
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return <h3>Меню</h3>
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

export default App;

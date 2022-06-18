import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Raiting} from "./Raiting";


function App() {
    console.log('App rendering')
    return (

        <div>
            <AppTitle/>
            Article 1
            <Raiting value={3}/>
            <Accordion/>
            Article 2
            <Raiting value={4}/>
            <Raiting value={0}/>
            <Raiting value={5}/>
        </div>

    )
        ;
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <div>This is APP component</div>
}



export default App;

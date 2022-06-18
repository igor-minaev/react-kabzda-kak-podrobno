import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Raiting} from "./Raiting";


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



export default App;

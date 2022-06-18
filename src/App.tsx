import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Raiting} from "./Raiting";


function App() {
    console.log('App rendering')
    return (

        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Raiting value={3}/>
            <Accordion title={'Меню'}/>
            <Accordion title={'Задачи'}/>
            Article 2
            <Raiting value={4}/>
            <Raiting value={0}/>
            <Raiting value={5}/>
        </div>

    )
        ;
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}


export default App;

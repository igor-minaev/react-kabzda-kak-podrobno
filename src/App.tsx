import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Raiting} from "./Raiting";
import OnOff from "./OnOff/OnOff";


function App() {
    console.log('App rendering')
    return (

        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Raiting value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Tasks'} collapsed={false}/>
            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <OnOff/>
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
        </div>

    )
        ;
}

type PageTitlePropsType={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}


export default App;

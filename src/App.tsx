import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RatingValueType} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import UncontrolledOnOff from "./components/UncotrolledOnOff/UncontrolledOnOff";


function App() {
    console.log('App rendering')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [swithOn, setSwitchOn]=useState<boolean>(false)
    return (
        <div className={'App'}>
            <UncontrolledRaiting/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {swithOn.toString()}
            {/*<UncontrolledAccordion titleValue={'Tasks'} />*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            <Raiting value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<Accordion titleValue={'Tasks'} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}
            <OnOff on={swithOn} onChange={setSwitchOn}/>
            {/*<UncontrolledOnOff on={false}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
            {/*<UncontrolledOnOff on={true}/>*/}
        </div>
    )
        ;
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}


export default App;

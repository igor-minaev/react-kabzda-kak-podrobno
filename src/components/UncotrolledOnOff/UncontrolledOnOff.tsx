import React, {useState} from 'react';

type OnOffType = {
    onChange:(on:boolean)=>void
}

const UncontrolledOnOff = (props: OnOffType) => {
    console.log('UncontrolledOnOff rendering')
    const [on, setOn] = useState<boolean>(true)
    console.log('on: ' + on)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={onStyle}>On
            </div>
            <div onClick={offClicked} style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;
import React, {useState} from 'react';

type OnOffType = {
    on: boolean
    onChange:(on:boolean)=>void
}

const OnOff = (props: OnOffType) => {
    console.log('UncontrolledOnOff rendering')
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div>
            <div onClick={() => {
                props.onChange(true)
            }} style={onStyle}>On
            </div>
            <div onClick={() => {
                props.onChange(false)
            }} style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
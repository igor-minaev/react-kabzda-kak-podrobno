import React from 'react';

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        display:'inline-block',
        width:'30px',
        height:'20px',
        border:'1px solid black',
        marginRight:'5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        display:'inline-block',
        width:'30px',
        height:'20px',
        border:'1px solid black',
        marginRight:'5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const lightStyle = {
        display:'inline-block',
        width:'14px',
        height:'14px',
        border:'1px solid black',
        borderRadius:'50%',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div style={{marginBottom:'10px'}}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={lightStyle}></div>
        </div>
    );
};


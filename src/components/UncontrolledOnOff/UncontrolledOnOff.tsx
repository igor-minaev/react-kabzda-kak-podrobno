import {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    console.log("UncontrolledOnOff rendered")

    const [on, setOn] = useState(props.defaultOn ?? false)

    const onStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        backgroundColor: on ? "green" : "white",
        border: "2px solid black",
    }
    const offStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        backgroundColor: !on ? "red" : "white",
        border: "2px solid black"
    }
    const lightStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        backgroundColor: on ? "green" : "red",
        borderRadius: "50%",
        border: "2px solid black"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px"}}>
            <span style={onStyle} onClick={onClicked}>on</span>
            <span style={offStyle} onClick={offClicked}>off</span>
            <span style={lightStyle}></span>
        </div>
    );
};

export default UncontrolledOnOff;


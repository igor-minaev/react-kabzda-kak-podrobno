import {useState} from "react";


export const OnOff = () => {
    console.log("OnOff rendered")

    const [on, setOn] = useState(false)

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

    return (
        <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px"}}>
            <span style={onStyle} onClick={() =>
                setOn(true)}>on</span>
            <span style={offStyle} onClick={() =>
                setOn(false)
            }>off</span>
            <span style={lightStyle}></span>
        </div>
    );
};

export default OnOff;


//
// type OnOffPropsType = {
//     on: boolean
// }
// export const OnOff = ({on}: OnOffPropsType) => {
//     const onStyle = {
//         display: "inline-block",
//         width: "40px",
//         height: "30px",
//         backgroundColor: on ? "green" : "white",
//         border: "2px solid black",
//     }
//     const offStyle = {
//         display: "inline-block",
//         width: "40px",
//         height: "30px",
//         backgroundColor: !on ? "red" : "white",
//         border: "2px solid black"
//     }
//     const lightStyle = {
//         display: "inline-block",
//         width: "30px",
//         height: "30px",
//         backgroundColor: on ? "green" : "red",
//         borderRadius: "50%",
//         border: "2px solid black"
//     }
//
//     return (
//         <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px"}}>
//             <span style={onStyle}>on</span>
//             <span style={offStyle}>off</span>
//             <span style={lightStyle}></span>
//         </div>
//     );
// };
//
// export default OnOff;
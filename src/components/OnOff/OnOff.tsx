type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOff = (props: OnOffPropsType) => {
    console.log("UncontrolledOnOff rendered")


    const onStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        backgroundColor: props.on ? "green" : "white",
        border: "2px solid black",
    }
    const offStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        backgroundColor: !props.on ? "red" : "white",
        border: "2px solid black"
    }
    const lightStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        backgroundColor: props.on ? "green" : "red",
        borderRadius: "50%",
        border: "2px solid black"
    }

    return (
        <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px"}}>
            <span style={onStyle} onClick={() =>
                props.onChange(true)}>on</span>
            <span style={offStyle} onClick={() =>
                props.onChange(false)
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
// export const UncontrolledOnOff = ({on}: OnOffPropsType) => {
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
// export default UncontrolledOnOff;
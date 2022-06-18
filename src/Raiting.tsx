import React from "react";

export function Raiting() {
    console.log('Raiting rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendering')
    return <div>star</div>
}
import React, { useState } from "react";


const SpecialButton = (props) => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    return <button
        onClick={() => {
            setNumberOfClicks(numberOfClicks + 1);
        }}
    >This is the {props.title} button and it has been clicked {numberOfClicks} times.</button>
}

export default SpecialButton;

import React from "react";
import ReactDOM from 'react-dom';
import SpecialButton from "./SpecialButton";
import VueContainer from "./VueContainer";

const element = <>
    <div>
        <h1>This is a React app!</h1>
        <SpecialButton
        title={"React button"}
        ></SpecialButton>
        <h1>Vue Component running inside of a React app:</h1>
        <VueContainer></VueContainer>
    </div>
</>



ReactDOM.render(element, document.getElementById('root'));

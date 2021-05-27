import React from "react";
import ReactDOM from 'react-dom';
import SpecialButton from "./SpecialButton";


const element = <>
    <div>
        <h1>This is a React app!</h1>
        <SpecialButton
            title={"React button"}
        ></SpecialButton>
    </div>
</>



ReactDOM.render(element, document.getElementById('root'));

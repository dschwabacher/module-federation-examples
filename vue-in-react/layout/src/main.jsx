import React from "react";
import ReactDOM from 'react-dom';
import SpecialButton from "./SpecialButton";
import { VueInReact } from 'vuera';


(async function loadModule() {
    const module = await import("home/RenderedButton");
    console.log(module.default);
    const Component = VueInReact(module.default);
    const element = <>
    <div>
        <h1>This is a React app!</h1>
        <SpecialButton
        title={"React button"}
        ></SpecialButton>
        <h1>Vue Component running inside of a React app:</h1>
        <Component></Component>
    </div>
    </>
    ReactDOM.render(element, document.getElementById('root'));
})();

// await loadModule();

/*
x.then((z) => {
    console.log("resolved module");
    module = z;
    Component = VueInReact(module);
    const element = <>
    <div>
        <h1>This is a React app!</h1>
        <SpecialButton
        title={"React button"}
        ></SpecialButton>
        <h1>Vue Component running inside of a React app:</h1>
        <Component></Component>
    </div>
    </>
    ReactDOM.render(element, document.getElementById('root'));
}).catch((err) => console.log("error resolving module: " + err));

const z = 0;

*/



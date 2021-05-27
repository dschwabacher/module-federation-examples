import React, { useState } from "react";
import { VueWrapper, VueInReact } from 'vuera';
// import VueButton from "../../home/src/components/VueTestButton";

export default (async () => {
    await import("home/RenderedButton")
})().then((z) => console.log("resolved module"))
    .catch((err) => console.log("error resolving module: " + err));
/*
export default () => {
    x().then((z) => {
        const Component = VueInReact(z)
        return (
            <div>
                <Component />
            </div>
        );    
    }).catch((error) => {
        console.log("error: " + error);
    })
    return null;
}
*/
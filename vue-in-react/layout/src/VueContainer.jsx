import React, { useState } from "react";
import { VueWrapper, VueInReact } from 'vuera';
import VueButton from "../../home/src/components/VueTestButton";

export default () => {
    const Component = VueInReact(VueButton)
    return (
        <div>
            <Component />
        </div>
    );    
}
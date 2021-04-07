import React from "react";
import {EpicView} from "./EpicView";

export const Epic = (props) => {
    return (
        <EpicView epicData={props.epicData}/>
    )
};
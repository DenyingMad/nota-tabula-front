import React from "react";
import {LeftContainerView} from "./LeftContainerView";

export const LeftContainer = (props) => {
    const handlerRenameEpic = () => {
    };
    return (
        <LeftContainerView
            epicDetails={props.epicDetails}
            epicId={props.epicId}
            handlerRenameEpic={handlerRenameEpic}
        />
    )
}
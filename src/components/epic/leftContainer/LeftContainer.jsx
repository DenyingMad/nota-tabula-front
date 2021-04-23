import React from "react";
import {LeftContainerView} from "./LeftContainerView";
import {renameEpic} from "../../../api/EpicApi";

export const LeftContainer = (props) => {
    const handlerRenameEpic = (value, inputProps) => {
        renameEpic(inputProps.epicid, value)
            .then(r => r)
            .catch(error => console.log(error))
    };

    return (
        <LeftContainerView
            epicDetails={props.epicDetails}
            epicId={props.epicId}
            handlerRenameEpic={handlerRenameEpic}
            handlerDeleteEpic={props.handlerDeleteEpic}
        />
    );
};

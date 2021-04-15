import React, {useState} from "react";
import {RightContainerView} from "./RightContainerView";

export const RightContainer = (props) => {
    const [selectedLayout, setSelectedLayout] = useState(0);

    const handleChangeTab = (event, newSelected) => {
        setSelectedLayout(newSelected);
    };

    return (
        <RightContainerView
            selectedLayout={selectedLayout}
            handlerChangeTab={handleChangeTab}
            taskLists={props.taskLists}
            setTaskLists={props.setTaskLists}
            epicId={props.epicId}
        />
    );
};

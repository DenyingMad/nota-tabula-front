import React, {useState} from "react";
import {RightContainerView} from "./RightContainerView";

export const RightContainer = (props) => {
    const [selectedLayout, setSelectedLayout] = useState(0);
    const handlerChangeTab = (event, newSelected) => {
        setSelectedLayout(newSelected);
    };
    return (
        <RightContainerView
            selectedLayout={selectedLayout}
            handlerChangeTab={handlerChangeTab}
            taskLists={props.taskLists}
            handlerAddTaskList={props.handlerAddTaskList}
            epicId={props.epicId}
            />
    )
}
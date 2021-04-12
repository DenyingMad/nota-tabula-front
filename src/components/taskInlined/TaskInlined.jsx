import React, {useState} from "react";
import {TaskInlinedView} from "./TaskInlinedView";

export const TaskInlined = (props) => {
    const [btnCheck, setBtnCheck] = useState(props.taskCompleted);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudAction = () => {
        setAnchorEl(null);
    };
    const handlerCheckBox = (event) => {
        setBtnCheck(!btnCheck);
    }
    const [selectedPriority, setSelectedPriority] = React.useState(props.taskPriority);
    const handlerPriorityChange = (event) => {
        setSelectedPriority(event.target.value);
    };
    const handlerRenameTask = () => {
    };
    return (
        <TaskInlinedView
            epicId={props.epicId}
            taskListId={props.taskListId}
            btnCheck={btnCheck}
            taskName={props.taskName}
            taskDescription={props.taskDescription}
            taskAssigned={props.assigned}
            taskPriority={props.priority}
            taskId={props.taskId}
            selectedPriority={selectedPriority}
            progress={50}
            anchorEl={anchorEl}
            handlerCrudAction={handlerCrudAction}
            handlerCheckBox={handlerCheckBox}
            handlerRenameTask={handlerRenameTask}
            handlerPriorityChange={handlerPriorityChange}
            handlerCrudMenu={handlerCrudMenu}
        />
    )
}
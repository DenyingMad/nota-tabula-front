import React, {useState} from "react";
import {TaskInlinedView} from "./TaskInlinedView";
import {updatePriority, updateStatus} from "../../api/EpicApi";
import {handlerStatusLookup, statusLookup} from "../../utils/taskStatusLookup";

export const TaskInlined = (props) => {
    const [btnCheck, setBtnCheck] = useState(statusLookup(props.taskStatus));
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedPriority, setSelectedPriority] = useState(props.taskPriority);

    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudAction = () => {
        setAnchorEl(null);
    };

    const handlerCheckBox = (taskId, event) => {
        setBtnCheck(event.target.checked);
        updateStatus(taskId, handlerStatusLookup(event.target.checked))
            .then(r => r)
            .catch(error => console.log(error))
    };
    const handlerPriorityChange = (taskId, event) => {
        setSelectedPriority(event.target.value);
        updatePriority(taskId, event.target.value)
            .then(r => r)
            .catch(error => console.log(error))
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
            setAnchorEl={setAnchorEl}
            handlerCrudAction={handlerCrudAction}
            handlerCheckBox={handlerCheckBox}
            handlerRenameTask={handlerRenameTask}
            handlerPriorityChange={handlerPriorityChange}
            handlerCrudMenu={handlerCrudMenu}
            handlerDeleteTask={props.handlerDeleteTask}
        />
    );
};

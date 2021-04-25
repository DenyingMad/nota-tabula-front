import React, {useState} from "react";
import {TaskInlinedView} from "./TaskInlinedView";
import {renameTask, updatePriority, updateStatus} from "../../api/TaskApi";
import {TaskStatus} from "../../utils/TaskStatusEnum";
import {PriorityEnum} from "../../utils/PriorityEnums";

export const TaskInlined = (props) => {
    const [status, setStatus] = useState(TaskStatus.toStatusEnum(props.taskStatus));
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedPriority, setSelectedPriority] = useState(PriorityEnum.toPriorityEnum(props.taskPriority));

    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudAction = () => {
        setAnchorEl(null);
    };

    const handlerCheckBox = (taskId, event) => {
        const newStatus = event.target.checked ? TaskStatus.DONE : TaskStatus.OPEN;
        setStatus(newStatus);

        updateStatus(taskId, newStatus.getStatus())
            .then(r => r)
            .catch(error => console.log(error))
    };
    const handlerPriorityChange = (taskId, event) => {
        setSelectedPriority(PriorityEnum.toPriorityEnum(event.target.value));

        updatePriority(taskId, event.target.value)
            .then(r => r)
            .catch(error => console.log(error))
    };
    const handlerRenameTask = (value, inputProps) => {
        renameTask(inputProps.taskid, value)
            .then(r => r)
            .catch(error => console.log(error))
    };

    return (
        <TaskInlinedView
            epicId={props.epicId}
            taskListId={props.taskListId}
            status={status}
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

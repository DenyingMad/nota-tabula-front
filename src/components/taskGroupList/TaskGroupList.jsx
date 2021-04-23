import React from "react";
import {TaskListAccordion} from "./TaskAccordion";

export const TaskGroupList = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudActions = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {props.taskLists.map((taskList) => (
                <TaskListAccordion
                        key={`TaskListAccordion-${taskList.taskListId}`}
                        anchorEl={anchorEl}
                        handlerCrudMenu={handlerCrudMenu}
                        handlerCrudActions={handlerCrudActions}
                        setAnchorEl={setAnchorEl}
                        epicId={props.epicId}
                        handlerDeleteTaskList={props.handlerDeleteTaskList}
                        taskList={taskList}
                        incrementTotalTasksInEpic={props.incrementTotalTasksInEpic}
                        decrementTotalTasksInEpic={props.decrementTotalTasksInEpic}
                />
            ))}
        </div>
    );
};

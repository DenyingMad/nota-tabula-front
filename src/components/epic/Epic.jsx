import React, {useState} from "react";
import {EpicView} from "./EpicView";

export const Epic = (props) => {
    const [taskLists, setTaskLists] = useState(props.epicData.taskLists);
    const [epicDetails, setEpicDetails] = useState(props.epicData.details);

    const changeTotalTasksInEpic = value => {
        setEpicDetails(
            {
                ...epicDetails,
                totalTasks: epicDetails.totalTasks + value,
            }
        )
    };
    const changeTotalTaskLists = (taskListValue, taskValue = 0) => {
        setEpicDetails(
            {
                ...epicDetails,
                totalTaskList: epicDetails.totalTaskList + taskListValue,
                totalTasks: epicDetails.totalTasks + taskValue,
            }
        )
    };

    return (
        <EpicView
            epicId={props.epicData.epicId}
            epicTaskLists={taskLists}
            setEpicTaskLists={setTaskLists}
            epicDetails={epicDetails}
            changeTasksCounter={changeTotalTasksInEpic}
            changeTaskListsCounter={changeTotalTaskLists}
            handlerDeleteEpic={props.handlerDeleteEpic}
        />
    );
};

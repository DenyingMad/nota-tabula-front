import React, {useState} from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";

export const EpicView = (props) => {
    const classes = useEpicStyles();

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
        <Card className={clsx(classes.flexRow, classes.epicContainer, classes.fullWidth)}>
            <LeftContainer
                epicId={props.epicData.epicId}
                epicDetails={epicDetails}
                handlerDeleteEpic={props.handlerDeleteEpic}
            />
            <RightContainer
                epicId={props.epicData.epicId}
                taskLists={taskLists}
                setTaskLists={setTaskLists}
                changeTotalTasksInEpic={changeTotalTasksInEpic}
                changeTotalTaskLists={changeTotalTaskLists}
            />
        </Card>
    );
};

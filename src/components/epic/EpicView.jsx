import React, {useState} from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";

export const EpicView = (props) => {
    const classes = useEpicStyles();

    const [totalTaskLists, setTotalTaskLists] = useState(props.epicData.details.totalTaskList);
    const [totalTasks, setTotalTasks] = useState(props.epicData.details.totalTasks);
    const [taskLists, setTaskLists] = useState(props.epicData.taskLists);

    const incrementTotalTasksInEpic = (value = 1) => {
        setTotalTasks(totalTasks + value);
    };
    const decrementTotalTasksInEpic = (value = 1) => {
        setTotalTasks(totalTasks - value);
    };
    const incrementTotalTaskLists = (value = 1) => {
        setTotalTaskLists(totalTaskLists + value);
    };
    const decrementTotalTaskLists = (value = 1) => {
        setTotalTaskLists(totalTaskLists - value);
    };

    return (
        <Card className={clsx(classes.flexRow, classes.epicContainer, classes.fullWidth)}>
            <LeftContainer
                epicId={props.epicData.epicId}
                epicDetails={props.epicData.details}
                totalTasksInEpic={totalTasks}
                totalTaskLists={totalTaskLists}
                handlerDeleteEpic={props.handlerDeleteEpic}
            />
            <RightContainer
                epicId={props.epicData.epicId}
                taskLists={taskLists}
                setTaskLists={setTaskLists}
                incrementTotalTasksInEpic={incrementTotalTasksInEpic}
                decrementTotalTasksInEpic={decrementTotalTasksInEpic}
                incrementTotalTaskLists={incrementTotalTaskLists}
                decrementTotalTaskLists={decrementTotalTaskLists}
            />
        </Card>
    );
};

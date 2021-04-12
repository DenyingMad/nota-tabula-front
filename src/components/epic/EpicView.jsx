import React, {useState} from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";
import {createTaskList} from "../../api/EpicApi";

export const EpicView = (props) => {
    const [taskLists, setTaskLists] = useState(props.epicData.taskLists);
    const handlerAddTaskList = (epicId) => {
        createTaskList(epicId, "Default Name")
            .then(r => {
                setTaskLists([...taskLists,r])
            })
            .catch(error => console.log(error));
    };
    const classes = useEpicStyles();
    return (
        <Card className={clsx(classes.flexRow, classes.epicContainer)}>
            <LeftContainer
                epicId={props.epicData.epicId}
                epicDetails={props.epicData.details}
            />
            <RightContainer
                epicId={props.epicData.epicId}
                taskLists={taskLists}
                handlerAddTaskList={handlerAddTaskList}
            />
        </Card>
    )
};
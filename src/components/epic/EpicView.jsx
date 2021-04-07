import React, {useState} from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";
import {createTaskList} from "../../api/epicApi";

export const EpicView = (props) => {
    const classes = useEpicStyles();
    const [taskLists, setTaskLists] = useState(props.epicData.taskLists);
    const handlerAddTaskList = (epicId) => {
        createTaskList(epicId)
            .then(r => {
                setTaskLists([...taskLists,r])
            })
            .catch(error => console.log(error));
    };
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
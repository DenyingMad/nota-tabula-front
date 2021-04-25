import React from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";

export const EpicView = (props) => {
    const classes = useEpicStyles();

    return (
        <Card className={clsx(classes.flexRow, classes.epicContainer, classes.fullWidth)}>
            <LeftContainer
                epicId={props.epicId}
                epicDetails={props.epicDetails}
                handlerDeleteEpic={props.handlerDeleteEpic}
            />
            <RightContainer
                epicId={props.epicId}
                taskLists={props.epicTaskLists}
                setTaskLists={props.setEpicTaskLists}
                changeTotalTasksInEpic={props.changeTasksCounter}
                changeTotalTaskLists={props.changeTaskListsCounter}
            />
        </Card>
    );
};

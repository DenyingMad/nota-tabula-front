import React, {useState} from "react";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/LeftContainer";
import {RightContainer} from "./rightContainer/RightContainer";
import Card from "@material-ui/core/Card";
import {useEpicStyles} from "./EpicStyles";

export const EpicView = (props) => {
    const classes = useEpicStyles();

    const [taskLists, setTaskLists] = useState(props.epicData.taskLists);

    return (
        <Card className={clsx(classes.flexRow, classes.epicContainer, classes.fullWidth)}>
            <LeftContainer
                epicId={props.epicData.epicId}
                epicDetails={props.epicData.details}
            />
            <RightContainer
                epicId={props.epicData.epicId}
                taskLists={taskLists}
                setTaskLists={setTaskLists}
            />
        </Card>
    );
};

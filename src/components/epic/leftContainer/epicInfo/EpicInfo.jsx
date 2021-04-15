import React from "react";
import Card from "@material-ui/core/Card";

export const EpicInfo = (props) => {

    return (
        <Card>
            Epic info will go here<br/>
            Total Task Lists: {props.totalTaskLists}<br/>
            Total Tasks: {props.totalTasks}<br/>
            Etc.
        </Card>
    );
};

import React from "react";
import {PlayArrow} from "@material-ui/icons";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";

export const TaskTimer = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <PlayArrow className={classes.hidden}/>
    );
};

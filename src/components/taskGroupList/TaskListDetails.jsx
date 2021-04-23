import React from "react";
import Typography from "@material-ui/core/Typography";
import {useTaskListsStyles} from "./TaskGroupListStyles";

export const TaskListDetails = (props) => {
    const classes = useTaskListsStyles();

    return(
        <Typography className={classes.listShortInfo}>Total tasks: {props.totalTasks}</Typography>
    );
};

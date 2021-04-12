import React from "react";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";
import clsx from "clsx";
import {Typography} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

export const TaskProgress = (props) => {
    const classes = useTaskInlinedStyles();
    return (
        <div className={clsx(
            classes.flexColumn,
            classes.progressBarContainer
        )}>
            <div className={classes.flexRow}>
                <Typography className={clsx(classes.progressBarText, classes.flexForceLeft)} variant="caption">
                    {props.startText}
                </Typography>
                <Typography className={clsx(classes.progressBarText, classes.flexForceRight)} variant="caption">
                    {props.endText}
                </Typography>
            </div>
            <LinearProgress
                variant="determinate"
                value={props.progress}
                classes={{
                    root: classes.progressBackground,
                    bar: classes.progressColor
                }}
            />
        </div>
    )
}
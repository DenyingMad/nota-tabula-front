import React from "react";
import {IconButton, Typography} from "@material-ui/core";
import {useLeftContainerStyles} from "./LeftContainerStyles";
import clsx from "clsx";
import {EpicInfo} from "./epicInfo/EpicInfo";
import {SharedWith} from "./sharedWith/SharedWith";
import {Create} from "@material-ui/icons";

export const LeftContainer = (props) => {
    const classes = useLeftContainerStyles();
    return (
        <div className={clsx(classes.epicSideBar, classes.flexColumn)}>
            <div className={classes.elementWithButton}>
                <Typography
                    variant="h5"
                    align="center"
                    >
                    {props.epicDetails.epicName}
                </Typography>
                <IconButton
                    aria-label="edit"
                    className={classes.editButton}
                    size="small"
                    // onClick={}
                >
                    <Create fontSize="inherit"/>
                </IconButton>
            </div>
            <Typography
                variant="body1"
                >
                {props.epicDetails.epicDescription}
            </Typography>
            <EpicInfo
                totalTasks={props.epicDetails.totalTasks}
                totalTaskLists={props.epicDetails.totalTaskLists}
            />
            <SharedWith
                style={classes.flexForceBottom}
            />
        </div>
    )
}
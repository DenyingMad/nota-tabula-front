import React from "react";
import {IconButton, Typography} from "@material-ui/core";
import {useLeftContainerStyles} from "./leftContainerStyles";
import clsx from "clsx";
import {EpicInfo} from "./epicInfo/EpicInfo";
import {SharedWith} from "./sharedWith/sharedWith";
import Button from "@material-ui/core/Button";
import {Create} from "@material-ui/icons";

export const LeftContainer = (props) => {
    const classes = useLeftContainerStyles();
    const epicData = props.epicData;
    return (
        <div className={clsx(classes.epicSideBar, classes.flexColumn)}>
            <div className={classes.elementWithButton}>
                <Typography
                    variant="h5"
                    align="center"
                    >
                    {epicData.epicName}
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
                {epicData.description}
            </Typography>
            <EpicInfo/>
            <SharedWith
                style={classes.forceBottom}
                epicData={epicData}
            />
        </div>
    )
}
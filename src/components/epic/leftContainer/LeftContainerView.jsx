import React from "react";
import {Typography} from "@material-ui/core";
import {useLeftContainerStyles} from "./LeftContainerStyles";
import clsx from "clsx";
import {EpicInfo} from "./epicInfo/EpicInfo";
import {SharedWith} from "./sharedWith/SharedWith";
import {Clear, Create, Done} from "@material-ui/icons";
import EdiText from 'react-editext'

export const LeftContainerView = (props) => {
    const classes = useLeftContainerStyles();

    return (
        <div className={clsx(classes.epicSideBar, classes.flexColumn, classes.fullWidth)}>
            <Typography
                variant="h5"
                align="center">
                <EdiText
                    value={props.epicDetails.epicName === null ? "New Epic" : props.epicDetails.epicName}
                    type="text"
                    onSave={props.handlerRenameEpic}
                    editButtonClassName={classes.renameButton}
                    editButtonContent={<Create/>}
                    saveButtonContent={<Done/>}
                    saveButtonClassName={classes.renameButton}
                    cancelButtonContent={<Clear/>}
                    cancelButtonClassName={classes.renameButton}
                    hideIcons
                    showButtonsOnHover
                    cancelOnUnfocus
                    cancelOnEscape
                    submitOnEnter
                />
            </Typography>
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
    );
};

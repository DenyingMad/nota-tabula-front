import React from "react";
import {Typography} from "@material-ui/core";
import {useLeftContainerStyles} from "./LeftContainerStyles";
import clsx from "clsx";
import {EpicInfo} from "./epicInfo/EpicInfo";
import {SharedWith} from "./sharedWith/SharedWith";
import {Clear, Create, DeleteForever, Done} from "@material-ui/icons";
import EdiText from 'react-editext'
import Button from "@material-ui/core/Button";

export const LeftContainerView = (props) => {
    const classes = useLeftContainerStyles();

    return (
        <div className={clsx(
            classes.epicSideBar,
            classes.flexColumn
        )}>
            <EdiText
                value={props.epicDetails.epicName}
                type="text"
                onSave={props.handlerRenameEpic}
                editButtonClassName={classes.renameButtonLarge}
                editButtonContent={<Create/>}
                saveButtonContent={<Done/>}
                saveButtonClassName={classes.renameButtonLarge}
                cancelButtonContent={<Clear/>}
                cancelButtonClassName={classes.renameButtonLarge}
                hideIcons
                showButtonsOnHover
                cancelOnUnfocus
                cancelOnEscape
                submitOnEnter
                inputProps={{
                    epicid: props.epicId,
                }}
                renderValue={(value => {
                    return (
                        <Typography variant="h5" align="center">
                            {value}
                        </Typography>
                    )
                })}
            />
            <Typography variant="body1">
                {props.epicDetails.epicDescription}
            </Typography>
            <EpicInfo
                totalTasks={props.epicDetails.totalTasks}
                totalTaskLists={props.epicDetails.totalTaskList}
            />
            <SharedWith
                style={classes.flexForceBottom}
            />
            <Button
                type="button"
                className={clsx(
                    classes.deleteButtonOverride,
                    classes.fullWidth,
                    classes.buttonRedColor,
                    classes.flexForceBottom
                )}
                variant="contained"
                startIcon={<DeleteForever/>}
                onClick={(e) => props.handlerDeleteEpic(props.epicId, e)}
            >
                <Typography variant="body1">
                    Delete Epic
                </Typography>
            </Button>
        </div>
    );
};

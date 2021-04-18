import React from "react";
import {Clear, Create, Done, MoreVert} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import EdiText from "react-editext";
import {Typography} from "@material-ui/core";
import {TaskShared} from "./taskComponents/TaskShared";
import {PrioritySelect} from "./taskComponents/PrioritySelect";
import {TaskProgress} from "./taskComponents/TaskProgress";
import {TaskTimer} from "./taskComponents/TaskTimer";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useTaskInlinedStyles} from "./TaskInlinedStyles";

export const TaskInlinedView = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <Card className={clsx(
            classes.flexRow,
            classes.taskItem,
            classes.fullWidth,
            {[classes.taskDone] : props.status.toCheckBoxValue()}
        )}>
            <Checkbox
                checked={props.status.toCheckBoxValue()}
                onChange={(e) => props.handlerCheckBox(props.taskId, e)}
                inputProps={{'aria-label': 'primary checkbox'}}
            />
            <EdiText
                value={props.taskName}
                type="text"
                onSave={props.handlerRenameTask}
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
                renderValue={(value => {
                    return (
                        <Typography>
                            {value}
                        </Typography>
                    )
                })}
            />
            <TaskShared/>
            <PrioritySelect
                taskId={props.taskId}
                selectedPriority={props.selectedPriority}
                handlerPriorityChange={props.handlerPriorityChange}
            />
            <TaskProgress
                startText={"Start"}
                endText={"Finish"}
                progress={props.progress}
            />
            <TaskTimer/>
            <Button aria-controls="taskCrud" aria-haspopup="true" onClick={props.handlerCrudMenu}>
                <MoreVert fontSize="small"/>
            </Button>
            <Menu
                id={"crudMenu" + props.taskId}
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handlerCrudAction}
            >
                <MenuItem onClick={
                    (e) => {
                        props.setAnchorEl(null);
                        props.handlerDeleteTask(props.epicId, props.taskListId, props.taskId, e);
                    }
                }>Delete</MenuItem>
            </Menu>
        </Card>
    );
};

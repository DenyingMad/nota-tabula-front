import React from "react";
import {TaskGroupList} from "../../../taskGroupList/TaskGroupList";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {Add} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import {TabPanel} from "./TabPanel";

export const TaskGroupTab = (props) => {
    const classes = props.classes;
    return (
        <TabPanel value={props.selectedLayout} index={props.index} classes={props.classes}>
            <div>
                <TaskGroupList
                    epicId={props.epicId}
                    taskLists={props.taskLists}
                />
                <Button
                    type="button"
                    className={clsx(
                        classes.addItemButton,
                        classes.fullWidth
                    )}
                    variant="contained"
                    startIcon={<Add/>}
                    onClick={() => props.handlerAddTaskList(props.epicId)}
                >
                    <Typography variant="body1">
                        Add Task List
                    </Typography>
                </Button>
            </div>
        </TabPanel>
    )
}
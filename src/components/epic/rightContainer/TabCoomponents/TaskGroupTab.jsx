import React from "react";
import {TaskGroupList} from "../../../taskGroupList/TaskGroupList";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {Add} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import {TabPanel} from "./TabPanel";
import {createTaskList, deleteTaskList} from "../../../../api/EpicApi";

export const TaskGroupTab = (props) => {
    const classes = props.classes;

    const handleAddTaskList = (epicId) => {
        createTaskList(epicId, "Default Name")
            .then(r => {
                props.setTaskLists([...props.taskLists, r])
            })
            .catch(error => console.log(error));
    };
    const handlerDeleteTaskList = (taskListId) => {
        deleteTaskList(taskListId)
            .then(r => {
                props.setTaskLists(props.taskLists.filter(item => item.taskListId !== taskListId))
            })
            .catch(error => console.log(error))
    }

    return (
        <TabPanel value={props.selectedLayout} index={props.index} classes={props.classes}>
            <div>
                <TaskGroupList
                    epicId={props.epicId}
                    taskLists={props.taskLists}
                    handlerDeleteTaskList={handlerDeleteTaskList}
                />
                <Button
                    type="button"
                    className={clsx(
                        classes.addItemButton,
                        classes.fullWidth,
                        classes.buttonLightBlueColor
                    )}
                    variant="contained"
                    startIcon={<Add/>}
                    onClick={() => handleAddTaskList(props.epicId)}
                >
                    <Typography variant="body1">
                        Add Task List
                    </Typography>
                </Button>
            </div>
        </TabPanel>
    );
};
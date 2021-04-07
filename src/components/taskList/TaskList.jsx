import React, {useState} from "react";
import {useTaskListStyles} from "./TaskListStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import {TaskInlined} from "../taskInlined/TaskInlined";
import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";
import {createTask} from "../../api/epicApi";

export const TaskList = (props) => {
    const classes = useTaskListStyles();
    const [tasks, setTasks] =useState(props.tasks);
    const handlerAddTask = () => {
        createTask(props.epicId, props.taskListId)
            .then(r => {
                setTasks([...tasks, r])
            })
            .catch(error => console.log(error));
    };
    return (
        // width 100% has to be applied to all comps?
        <div className={classes.fullWidth}>
            <List className={classes.listRoot}>
                {tasks.map((task) => (
                    <ListItem key={task.taskId}>
                        <TaskInlined
                            epicId={props.epicId}
                            taskListId={props.taskListId}
                            taskCompleted={task.checked}
                            taskName={task.taskName}
                            taskDescription={task.taskDescription}
                            taskAssigned={task.assigned}
                            taskPriority={task.priority}
                            taskId={task.taskId}
                        />
                    </ListItem>
                    ))}
            </List>
            <Button
                className={clsx(
                    classes.addTaskButton,
                    classes.addItemButton
                )}
                variant="contained"
                startIcon={<Add/>}
                onClick={handlerAddTask}
            >
                <Typography variant="body1">
                    Add Task
                </Typography>
            </Button>
        </div>
    )
}
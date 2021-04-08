import React from "react";
import {useFormik} from "formik";
import {createTask} from "../../api/EpicApi";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {useTaskListStyles} from "./TaskListStyles";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";


export const AddTaskForm = (props) => {
    const classes = useTaskListStyles();
    const formik = useFormik({
        initialValues: {
            task: ''
        },
        onSubmit: (values, {resetForm}) => {
            handleAddTask(values.task);
            resetForm({task: ''})
        }
    });
    const handleAddTask = taskName => {
        console.log(taskName);
        addTask(taskName, props.setTasks, props.epicId, props.taskListId, props.tasks);
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            <OutlinedInput
                placeholder="Add Task"
                fullWidth
                id={`task${props.taskListId}`}
                name="task"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.task}
            />
            <button type="submit" className={classes.removeElement}></button>
        </form>
    )
};

const addTask = (taskName, setTasks, epicId, taskListId, tasks) => {
    createTask(epicId, taskListId, taskName)
        .then(r => {
            setTasks([...tasks, r])
        })
        .catch(error => console.log(error));
};
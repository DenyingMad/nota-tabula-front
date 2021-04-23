import React from "react";
import {useFormik} from "formik";
import {createTask} from "../../api/EpicApi";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {useTaskListStyles} from "./TaskListStyles";

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
        props.incrementTotalTasks();
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
            <button type="submit" className={classes.hidden}></button>
        </form>
    );
};

const addTask = (taskName, setTasks, epicId, taskListId, tasks) => {
    createTask(epicId, taskListId, taskName)
        .then(r => {
            setTasks([...tasks, r])
        })
        .catch(error => console.log(error));
};

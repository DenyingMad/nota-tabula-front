import React, {useState} from "react";
import {useTaskListStyles} from "./TaskListStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import {TaskInlined} from "../taskInlined/TaskInlined";
import {AddTaskForm} from "./AddTaskForm";
import {deleteTask} from "../../api/EpicApi";

export const TaskList = (props) => {
    const classes = useTaskListStyles();

    const [tasks, setTasks] = useState(props.tasks);

    const handlerDeleteTask = (epicId, taskListId, taskId) => {
        setTasks(tasks.filter(item => item.taskId !== taskId));
        deleteTask(epicId, taskListId, taskId)
            .then(r => r)
            .catch(error => console.log(error))
    };

    return (
        <div className={clsx(classes.listRoot, classes.fullWidth)}>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.taskId}>
                        <TaskInlined
                            epicId={props.epicId}
                            taskListId={props.taskListId}
                            taskStatus={task.status}
                            taskName={task.taskName}
                            taskDescription={task.taskDescription}
                            taskAssigned={task.assigned}
                            taskPriority={task.priority}
                            taskId={task.taskId}
                            handlerDeleteTask={handlerDeleteTask}
                        />
                    </ListItem>
                ))}
            </List>
            <AddTaskForm
                tasks={tasks}
                setTasks={setTasks}
                epicId={props.epicId}
                taskListId={props.taskListId}
            />
        </div>
    );
};

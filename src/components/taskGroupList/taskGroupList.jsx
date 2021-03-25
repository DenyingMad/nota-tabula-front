import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import {ExpandMore} from "@material-ui/icons";
import {useTaskListsStyles} from "./taskGroupListStyles";
import {TaskList} from "../taskList/taskList";

export const TaskGroupList = (props) => {
    const classes = useTaskListsStyles();
    const epicData = props.epicData;
    const showTaskLists = epicData.taskLists.map(({name, tasks}) => (
        <Accordion
            key={name}
            className={classes.listItem}
            >
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls={name+"content"}
                id={name+"header"}
            >
                <Typography>{name}</Typography>
                <Typography className={classes.listShortInfo}>Total tasks: {tasks.length}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TaskList tasks={tasks}/>
            </AccordionDetails>
        </Accordion>
    ));
    return (
        <div className={classes.taskLists}>
            {showTaskLists}
        </div>
    )
}
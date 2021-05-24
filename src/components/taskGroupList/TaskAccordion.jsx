import {useTaskListsStyles} from "./TaskGroupListStyles";
import React, {useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import clsx from "clsx";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {ExpandMore, MoreVert} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {TaskList} from "../taskList/TaskList";
import {TaskListDetails} from "./TaskListDetails";

export const TaskListAccordion = (props) => {
    const classes = useTaskListsStyles();

    const [totalTasks, setTotalTasks] = useState(props.taskList.tasks.length);

    const changeTotalTasks = value => {
        props.changeTotalTasksInEpic(value);
        setTotalTasks(totalTasks + value);
    };

    return (
        <Accordion
            key={props.taskList.taskListId}
            className={clsx(classes.accordionItems)}
        >
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls={props.taskList.taskListId + "content"}
                id={props.taskList.taskListId + "header"}
            >
                <div className={clsx(classes.flexRow, classes.summaryItems, classes.fullWidth)}>
                    <Typography>
                        {props.taskList.taskListName}
                    </Typography>
                    <TaskListDetails
                        totalTasks={totalTasks}
                    />
                    <FormControlLabel
                        className={classes.flexForceRight}
                        aria-label={`crud-dropdown-${props.taskList.taskListId}`}
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        label={false}
                        control={
                            <div>
                                <Button
                                    aria-controls={`task-list-crud-${props.taskList.taskListId}`}
                                    aria-haspopup="true"
                                    onClick={props.handlerCrudMenu}
                                    tasklistid={props.taskList.taskListId}
                                >
                                    <MoreVert fontSize="small"/>
                                </Button>
                                <Menu
                                    id={"crudMenu" + props.taskList.taskListId}
                                    anchorEl={props.anchorEl}
                                    keepMounted
                                    open={Boolean(props.anchorEl)}
                                    onClose={props.handlerCrudActions}
                                >
                                    <MenuItem onClick={props.handlerCrudActions}>Rename</MenuItem>
                                    <MenuItem onClick={
                                        (e) => {
                                            // при использовании props.taskList.taskListId напрямую передается некорректный id
                                            // id тасклиста берется из якорного элемента
                                            const taskListId = parseInt(props.anchorEl.getAttribute("tasklistid"));
                                            props.setAnchorEl(null);
                                            props.handlerDeleteTaskList(props.epicId, taskListId, totalTasks);
                                        }
                                    }>Delete</MenuItem>
                                </Menu>
                            </div>
                        }
                    />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <TaskList
                    epicId={props.epicId}
                    taskListName={props.taskList.taskListName}
                    taskListId={props.taskList.taskListId}
                    tasks={props.taskList.tasks}
                    changeTotalTasks={changeTotalTasks}
                />
            </AccordionDetails>
        </Accordion>
    );
};

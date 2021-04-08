import React, {useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import {ExpandMore, MoreVert} from "@material-ui/icons";
import {useTaskListsStyles} from "./TaskGroupListStyles";
import {TaskList} from "../taskList/TaskList";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const makeTaskListArray = taskLists => {
    let TaskListArray = [];
    taskLists.forEach(item => TaskListArray.push({
        id: item.taskListId,
        editing: false,
    }))
    return TaskListArray;
};

export const TaskGroupList = (props) => {
    const classes = useTaskListsStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudActions = () => {
        setAnchorEl(null);
    };
    const [editingArray, setEditing] = useState(makeTaskListArray(props.taskLists));
    const handlerEditName = index => {
        setEditing(editingArray.map(item =>
            item.id === index ? {...item, editing : true } : item
        ))}
    const showTaskLists = props.taskLists.map((taskList) => (
        <Accordion
            key={taskList.taskListId}
            className={clsx(classes.accordionItems)}
        >
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls={taskList.taskListId + "content"}
                id={taskList.taskListId + "header"}
            >
                <div className={clsx(classes.flexRow, classes.summaryItems)}>
                    <Typography>
                        {taskList.taskListName}
                    </Typography>
                    <Typography className={classes.listShortInfo}>Total tasks: {taskList.tasks.length}</Typography>
                    <FormControlLabel
                        className={classes.flexForceRight}
                        aria-label="crudDropdown"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        label={false}
                        control={
                            <div>
                                <Button aria-controls="taskCrud" aria-haspopup="true" onClick={handlerCrudMenu}>
                                    <MoreVert fontSize="small"/>
                                </Button>
                                <Menu
                                    id={"crudMenu" + taskList.taskListId}
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handlerCrudActions}
                                >
                                    {/*<MenuItem onClick={handlerCrudActions}>Rename</MenuItem>*/}
                                    <MenuItem onClick={handlerCrudActions}>Delete</MenuItem>
                                </Menu>
                            </div>
                        }
                    />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <TaskList
                    epicId={props.epicId}
                    taskListName={taskList.taskListName}
                    taskListId={taskList.taskListId}
                    tasks={taskList.tasks}
                />
            </AccordionDetails>
        </Accordion>
    ));
    return (
        <div className={classes.taskLists}>
            {showTaskLists}
        </div>
    )
}
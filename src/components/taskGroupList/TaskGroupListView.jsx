import {useTaskListsStyles} from "./TaskGroupListStyles";
import React from "react";
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

export const TaskGroupListView = (props) => {
    const classes = useTaskListsStyles();

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
                <div className={clsx(classes.flexRow, classes.summaryItems, classes.fullWidth)}>
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
                                <Button aria-controls="taskCrud" aria-haspopup="true" onClick={props.handlerCrudMenu}>
                                    <MoreVert fontSize="small"/>
                                </Button>
                                <Menu
                                    id={"crudMenu" + taskList.taskListId}
                                    anchorEl={props.anchorEl}
                                    keepMounted
                                    open={Boolean(props.anchorEl)}
                                    onClose={props.handlerCrudActions}
                                >
                                    <MenuItem onClick={props.handlerCrudActions}>Rename</MenuItem>
                                    <MenuItem onClick={props.handlerCrudActions}>Delete</MenuItem>
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
    );
};

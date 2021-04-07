import React from "react";
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

export const TaskGroupList = (props) => {
    const classes = useTaskListsStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCrudAction = () => {
        // call api
        setAnchorEl(null);
    };
    const showTaskLists = props.taskLists.map((taskList) => (
        <Accordion
            key={taskList.id}
            className={classes.accordionItems}
        >
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls={taskList.id + "content"}
                id={taskList.id + "header"}
            >
                <div className={clsx(classes.flexRow, classes.summaryItems)}>
                    <Typography>{taskList.taskListName}</Typography>
                    <Typography className={classes.listShortInfo}>Total tasks: {taskList.tasks.length}</Typography>
                        <FormControlLabel
                            className={classes.flexForceRight}
                            aria-label="crudDropdown"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            label={false}
                            control={
                                <div>
                                    <Button aria-controls="taskCrud" aria-haspopup="true" onClick={handleCrudMenu}>
                                        <MoreVert fontSize="small"/>
                                    </Button>
                                    <Menu
                                        id={"crudMenu" + taskList.id}
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleCrudAction}
                                    >
                                        <MenuItem onClick={handleCrudAction}>Rename</MenuItem>
                                        <MenuItem onClick={handleCrudAction}>Delete</MenuItem>
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
                    taskListId={taskList.id}
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
import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import {Typography} from "@material-ui/core";
import {useTaskInlinedStyles} from "./TaskInlinedStyles";
import clsx from "clsx";
import {AccountCircle, MoreVert, PlayArrow} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LinearProgress from "@material-ui/core/LinearProgress";

export const TaskInlined = (props) => {
    const classes = useTaskInlinedStyles();
    const [btnCheck, setBtnCheck] = useState(props.taskCompleted);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlerCrudMenu = (event) => {
        // call api
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudAction = () => {
        // call api
        setAnchorEl(null);
    };
    const handlerCheckBox = (event) => {
        // call api function here
        setBtnCheck(!btnCheck);
        console.log("Task: " + props.taskId + " requests change to completed: " + !btnCheck);
    }
    const [selectedPriority, setSelectedPriority] = React.useState(props.taskPriority);
    const handlerPriorityChange = (event) => {
        // call api function here
        setSelectedPriority(event.target.value);
        console.log("Task: " + props.taskId + " requests change to priority: " + event.target.value)
    };

    return (
        <Card className={clsx(classes.flexRow, classes.taskItem, classes.fullWidth)}>
            <Checkbox
                checked={btnCheck}
                onChange={handlerCheckBox}
                inputProps={{'aria-label': 'primary checkbox'}}
            />
            <Typography>
                {props.taskName}
            </Typography>

            {/*assigned placeholder*/}
            <AccountCircle className={classes.flexForceRight}/>

            <FormControl variant="outlined" className={classes.margin}>
                <Select
                    className={classes.prioritySelect}
                    native
                    id="prioritySelect"
                    value={selectedPriority}
                    onChange={handlerPriorityChange}
                >
                    <option value={1}>Low</option>
                    <option value={2}>Medium</option>
                    <option value={3}>High</option>
                </Select>
            </FormControl>

            {/*progress bar*/}
            <div className={clsx(
                classes.flexColumn,
                classes.progressBarContainer
            )}>
                <div className={classes.flexRow}>
                    <Typography className={clsx(classes.progressBarText, classes.flexForceLeft)} variant="caption">
                        Start
                    </Typography>
                    <Typography className={clsx(classes.progressBarText, classes.flexForceRight)} variant="caption">
                        Finish
                    </Typography>
                </div>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    classes={{
                        root: classes.progressBackground,
                        bar: classes.progressColor
                    }}
                />
            </div>

            {/*start timer placeholder*/}
            <PlayArrow/>

            <Button aria-controls="taskCrud" aria-haspopup="true" onClick={handlerCrudMenu}>
                <MoreVert fontSize="small"/>
            </Button>
            <Menu
                id={"crudMenu" + props.taskId}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handlerCrudAction}
            >
                <MenuItem onClick={handlerCrudAction}>Rename</MenuItem>
                <MenuItem onClick={handlerCrudAction}>Delete</MenuItem>
            </Menu>
        </Card>
    )
}
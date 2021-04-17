import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";

export const PrioritySelect = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <FormControl variant="outlined" className={classes.margin}>
            <Select
                className={classes.prioritySelect}
                native
                id="prioritySelect"
                value={props.selectedPriority}
                onChange={(e) => props.handlerPriorityChange(props.taskId, e)}
            >
                <option value={"LOW"}>Low</option>
                <option value={"MEDIUM"}>Medium</option>
                <option value={"HIGH"}>High</option>
            </Select>
        </FormControl>
    );
};

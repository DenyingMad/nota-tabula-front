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
                onChange={props.handlerPriorityChange}
            >
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
            </Select>
        </FormControl>
    )
}
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";
import {PriorityEnum} from "../../../utils/PriorityEnums";

export const PrioritySelect = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <FormControl variant="outlined" className={classes.flexForceRight}>
            <Select
                className={classes.prioritySelect}
                native
                id="prioritySelect"
                value={props.selectedPriority.getPriority()}
                onChange={(e) => props.handlerPriorityChange(props.taskId, e)}
            >
                <option value={PriorityEnum.LOW.getPriority()}>{PriorityEnum.LOW.getPriorityText()}</option>
                <option value={PriorityEnum.MEDIUM.getPriority()}>{PriorityEnum.MEDIUM.getPriorityText()}</option>
                <option value={PriorityEnum.HIGH.getPriority()}>{PriorityEnum.HIGH.getPriorityText()}</option>
            </Select>
        </FormControl>
    );
};

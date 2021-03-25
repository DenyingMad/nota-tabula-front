import React from "react";
import {useTaskListStyles} from "./taskListStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import {CheckBox} from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";

export const TaskList = (props) => {
    const classes = useTaskListStyles();
    const tasks = props.tasks
    // temporary, doesnt work
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        // width 100% has to be applied to all comps?
        <List className={classes.fullWidth}>
            {tasks.map(({checked, name, assigned, priority}) => {
                const labelId = `list-label-${name}`;
                return (
                    <ListItem
                        className={classes.fullWidth}
                        key={name}
                        >
                        <Card className={clsx(classes.flexRow, classes.taskItem)}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <Typography>
                                {name}
                            </Typography>
                            <Typography variant="overline">
                                Assigned: {assigned}
                            </Typography>
                            <Typography>
                                Priority: {priority}
                            </Typography>
                        </Card>
                    </ListItem>
                );
            })}
        </List>
    )
}
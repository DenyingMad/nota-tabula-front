import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/globalStyles";

const taskListStyles = theme => ({
    ...globalStyles(theme),
    addTaskButton: {
        marginLeft: "1rem",
    },
    listRoot: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: "11rem",
    }
});

export const useTaskListStyles = makeStyles(taskListStyles, {name: "TaskListStyles"});
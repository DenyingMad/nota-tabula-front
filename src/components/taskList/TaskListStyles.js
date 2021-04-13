import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

const taskListStyles = theme => ({
    ...globalStyles(theme),
    addTaskButton: {
        marginLeft: "1rem",
    },
    listRoot: {
        position: 'relative',
    },
    addTaskText: {
        textAlign: "center",
    }
});

export const useTaskListStyles = makeStyles(taskListStyles, {name: "TaskListStyles"});

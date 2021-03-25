import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/globalStyles";

const taskListStyles = theme => ({
    ...globalStyles(theme),
    fullWidth: {
        width: "100%",
    },
    taskItem: {
        justifyContent: "start",
        alignItems: "center",
        padding: "0.5rem 0.5rem 0.5rem 0.5rem",
        width: "100%",
        gap: "0.5rem",
    },
    taskName: {
        alignSelf: "start",
    },
    taskAssignees: {
        alignSelf: "center",
    },
    taskPriority:{
        alignSelf: "end",
    },
});

export const useTaskListStyles = makeStyles(taskListStyles, {name: "TaskListStyles"});
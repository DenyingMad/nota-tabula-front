import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

const taskInlinedStyles = theme => ({
    ...globalStyles(theme),
    taskItem: {
        justifyContent: "start",
        alignItems: "center",
        padding: "0.5rem 0.5rem 0.5rem 0.5rem",
        gap: "0.5rem",
    },
    taskDone: {
        opacity: "0.7",
        backgroundColor: "#eeeeee",
    },
    prioritySelect: {
        fontSize: "0.75rem",
    },
    progressBarContainer: {
        width: "4rem",
        gap: "0.2rem",
    },
    progressBackground: {
        backgroundColor: "#e0e0e0",
    },
    progressColor: {
        backgroundColor: "#00c853",
    },
    progressBarText: {
        fontSize: "0.5rem",
    }
});

export const useTaskInlinedStyles = makeStyles(taskInlinedStyles, {name: "TaskInlinedStyles"});

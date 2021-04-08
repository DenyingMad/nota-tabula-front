import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

// !!! Rename, too similar to task list styles
const taskListsStyles = theme => ({
    ...globalStyles(theme),
    taskLists: {
        width: "100%",
    },
    listShortInfo: {
        marginLeft: "2rem",
        color: "#D3D3D3"
    },
    accordionItems: {
        marginBottom: "0.5rem",
    },
    summaryItems: {
        gap: "0.25rem",
        alignItems: "center",
        width: "100%",
    },
    removeButton: {
        display: "none",
    }
});

export const useTaskListsStyles = makeStyles(taskListsStyles, {name: "TaskListsStyles"});
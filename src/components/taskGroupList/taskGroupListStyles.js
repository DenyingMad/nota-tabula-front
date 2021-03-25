import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/globalStyles";

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
    listItem: {
        // mb use accordion spacing?
        marginBottom: "0.5rem",
    }
});

export const useTaskListsStyles = makeStyles(taskListsStyles, {name: "TaskListsStyles"});
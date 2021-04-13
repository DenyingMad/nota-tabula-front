import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

const taskListsStyles = theme => ({
    ...globalStyles(theme),
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
    },
});

export const useTaskListsStyles = makeStyles(taskListsStyles, {name: "TaskListsStyles"});

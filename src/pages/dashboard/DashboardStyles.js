import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

const dashboardStyles = theme => ({
    ...globalStyles(theme),
    dashboardContainer: {
        maxWidth: "80rem",
    },
    epicList: {
        maxHeight: "35rem",
        overflowY: "auto",
    }
});

export const useDashboardStyles = makeStyles(dashboardStyles, {name: "DashboardStyles"});
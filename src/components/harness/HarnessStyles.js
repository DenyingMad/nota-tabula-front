import {globalStyles} from "../../styles/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 220;
const harnessStyles = theme => ({
    ...globalStyles(theme),
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#061c34",
        borderRight: "1px solid #777777",
        padding: 15,
    },
    listItem: {
        border: "1px solid #fff",
        borderRadius: 15,
        marginBottom: 5,
        paddingTop: 15,
        paddingBottom: 15,
    }
});

export const useHarnessStyles = makeStyles(harnessStyles, {name: "HarnessStyles"});
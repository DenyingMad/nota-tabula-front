import {globalStyles} from "../../styles/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const epicStyles = theme => ({
    ...globalStyles(theme),
    epicContainer: {
        maxHeight: "32rem",
        minHeight: "15rem",
    },
});

export const useEpicStyles = makeStyles(epicStyles, {name: "EpicStyles"});

import {globalStyles} from "../../styles/globalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const epicStyles = theme => ({
    ...globalStyles(theme),
    addEpicButton: {
        alignSelf: "center",
    },
    epicContainer: {
        // maxWidth: "74rem",
        width: "100%",
        maxHeight: "32rem",
        minHeight: "15rem",
    }
});

export const useEpicStyles = makeStyles(epicStyles, {name: "EpicStyles"});
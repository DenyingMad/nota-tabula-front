import {globalStyles} from "../../styles/globalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const epicStyles = theme => ({
    ...globalStyles(theme),
    mainEpicContainer: {
        display: "flex",
        flexDirection: "row",
    },
    addEpicButton: {
        maxWidth: "10rem",
        alignSelf: "center",
    },
});

export const useEpicStyles = makeStyles(epicStyles, {name: "EpicStyles"});
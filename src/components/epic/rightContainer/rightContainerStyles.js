import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../../styles/globalStyles";

const rightContainerStyles = theme => ({
    ...globalStyles(theme),
    epicRightSide: {
        maxWidth: "73.5rem",
        width: "100%",
        // justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem 0 1rem",
        gap: "0.25rem",
    },
    forceBottom: {
        marginTop: "auto",
    },
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: "0.25rem",
        marginBottom: "1rem",
    },
    switchButton: {
        textTransform: "none",
        fontSize: "small",
    }
});

export const useRightContainerStyles = makeStyles(rightContainerStyles, {name: "EpicRightSideStyles"});
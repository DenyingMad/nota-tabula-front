import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../../styles/GlobalStyles";

const rightContainerStyles = theme => ({
    ...globalStyles(theme),
    epicRightSide: {
        width: "100%",
        alignItems: "center",
        padding: "0 1rem 0 1rem",
        gap: "0.25rem",
    },
    tabsBar: {
        maxWidth: "30rem",
        marginBottom: "0.5rem",
    },
    tab: {
        textTransform: "none",
        padding: "0.25rem 0.5rem 0.25rem 0.5rem",
        fontSize: "small",
        minWidth: "8rem",
    },
    iconLabel: {
        alignItems: "center",
        gap: "0.25rem",
    }
});

export const useRightContainerStyles = makeStyles(rightContainerStyles, {name: "EpicRightSideStyles"});
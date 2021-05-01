import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../../styles/GlobalStyles";

const leftContainerStyles = theme => ({
    ...globalStyles(theme),
    epicSideBar: {
        width: "17rem",
        padding: "2rem 1.25rem 2rem 1.25rem",
        borderRight: "1px solid blue",
        gap: "0.5rem",
    },
    editButton: {
        backgroundColor: '#bdbdbd',
        '&:hover': {
            backgroundColor: '#9e9e9e',
        },
    },
    deleteButtonOverride: {
        margin: "0",
        textTransform: "none",
    },
});

export const useLeftContainerStyles = makeStyles(leftContainerStyles, {name: "EpicLeftSideStyles"});

import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../../styles/GlobalStyles";

const leftContainerStyles = theme => ({
    ...globalStyles(theme),
    epicSideBar: {
        maxWidth: "19rem",
        width: "100%",
        padding: "2rem 1.25rem 2rem 1.25rem",
        borderRight: "1px solid blue",
        gap: "0.5rem",
    },
    elementWithButton: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: "0.5rem"
    },
    editButton: {
        backgroundColor: '#bdbdbd',
        '&:hover': {
            backgroundColor: '#9e9e9e',
        },
    },
});

export const useLeftContainerStyles = makeStyles(leftContainerStyles, {name: "EpicLeftSideStyles"});
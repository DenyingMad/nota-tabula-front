import makeStyles from "@material-ui/core/styles/makeStyles";
import {globalStyles} from "../../styles/GlobalStyles";

const projectStyles = theme => ({
    ...globalStyles(theme),
    epicList: {
        maxHeight: "35rem",
        overflowY: "auto",
    }
});

export const useProjectStyles = makeStyles(projectStyles, {name: "ProjectStyles"});

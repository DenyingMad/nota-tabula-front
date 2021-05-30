import {globalStyles} from "../../styles/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const profileStyles = theme => ({
    ...globalStyles(theme),
    profileCard: {
        width: '20rem',
        height: '25rem',
        padding: '1rem',
        gap: '0.25rem',
    },
    textField: {
        marginTop: '1rem',
    }
});

export const useProfileStyles = makeStyles(profileStyles, {name: "ProfileStyles"});

import {globalStyles} from "../../styles/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const registerStyles = theme => ({
    ...globalStyles(theme),
    containerPaper: {
        maxWidth: '19rem',
        padding: '1.3rem 1.25rem 1.3rem 1.25rem',
        width: '100%',
        gap: '1.5rem',
    },
    authFormContainer: {
        justifyContent: 'center',
        alignItems: "center",
        gap: '1.5rem'
    },
    inputLabel: {
        marginLeft: '-15px', // margin 0 doesnt work
        marginTop: '-5px',
        color: 'black',
    },
    inputField: {
        marginTop: '2rem',
        backgroundColor: '#f5f5f5'
    },
});

export const useRegisterStyles = makeStyles(registerStyles, {name: "RegisterStyles"});
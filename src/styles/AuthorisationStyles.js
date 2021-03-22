import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '28%',
        margin: '0 auto',
        justifyContent: 'center',
    },
    flexRoot: {
        display: 'flex',
        flexDirection: 'column',
    },
    upperPaper: {
        marginBottom: '2rem',
    },
    sideMargin: {
        marginRight: '1.25rem',
        marginLeft: '1.25rem',
    },
    inputElement: {
        marginBottom: '0.25rem',
        marginTop: '0.5rem',
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
    authButtonMargin: {
        marginTop: "1rem",
        marginBottom: '2rem',
    },
    checkMarkButton: {
        marginTop: '0.5rem',
        marginLeft: '1.25rem',
    },
    upperTitle: {
        marginTop: '2rem',
        marginBottom: '0rem',
    },
    lowerText: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    authButtonStyled: {
        textTransform: 'none',
        backgroundColor: '#3cc9a7',
        '&:hover': {
            backgroundColor: '#46bea1',
        },
    },
    forgotLink: {
        marginTop: '0.25rem',
    }
}));

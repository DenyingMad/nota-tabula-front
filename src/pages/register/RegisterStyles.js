import makeStyles from "@material-ui/core/styles/makeStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

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
        marginBottom: '1rem',
        marginTop: '0.5em',
    },
    signInButton: {
        marginBottom: '2rem',
        //backgroundColor: 'rgb(70, 190, 161)',
    },
    upperTitle: {
        marginTop: '2rem',
        marginBottom: '1rem',
    },
    lowerText: {
        marginTop: '1rem',
        marginBottom: '1rem',
    }
}));

// button color, does not work yet
export const  buttonTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#7df1d2',
            main: '#46bea1',
            dark: '#008d73',
            contrastText: '#fff',
        },
    },
});

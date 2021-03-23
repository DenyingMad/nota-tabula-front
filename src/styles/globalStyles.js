import makeStyles from "@material-ui/core/styles/makeStyles";

export const globalStyles = theme => ({
    mainContainer: {
        margin: '1.5rem',
        padding: '2rem',
        border: '1px solid #000',
        borderRadius: 10
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    title: {
        marginTop: '1rem',
        marginBottom: '0.25rem',
    },
    submitButton: {
        margin: '0.25rem 0 1rem 0',
        textTransform: 'none',
        backgroundColor: '#3cc9a7',
        '&:hover': {
            backgroundColor: '#46bea1',
        },
    },
});

export const useCommonStyles = makeStyles(globalStyles, {name: 'commonStyles'});

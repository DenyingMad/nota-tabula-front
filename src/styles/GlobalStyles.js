import makeStyles from "@material-ui/core/styles/makeStyles";

export const globalStyles = theme => ({
    mainContainer: {
        margin: '1.5rem',
        padding: '2rem',
        border: '1px solid #000',
        borderRadius: 10
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
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
    buttonTealColor: {
        backgroundColor: '#3cc9a7',
        '&:hover': {
            backgroundColor: '#46bea1',
        },
    },
    buttonLightBlueColor: {
        backgroundColor: '#b3e5fc',
        '&:hover': {
            backgroundColor: '#81d4fa',
        },
    },
    buttonRedColor: {
        backgroundColor: '#fcbeb3',
        '&:hover': {
            backgroundColor: '#cd614a',
        },
    },
    addItemButton: {
        margin: '0.25rem 0 1rem 0',
        textTransform: 'none',
    },
    fullWidth: {
        width: "100%",
    },
    flexForceRight: {
        marginLeft: "auto",
    },
    flexForceBottom: {
        marginTop: "auto",
    },
    flexForceLeft: {
        marginRight: "auto",
    },
    renameButton: {
        backgroundColor: "transparent",
        border: "0px",
        transform: "scale(0.8)",
        color: "#9e9e9e",
    },
    scrollY: {
        overflowY: "auto",
    },
    hidden: {
        display: "none",
    }
});

export const useCommonStyles = makeStyles(globalStyles, {name: 'commonStyles'});

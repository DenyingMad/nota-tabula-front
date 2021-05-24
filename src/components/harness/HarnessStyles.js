import {globalStyles} from "../../styles/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 220;
const harnessStyles = theme => ({
    ...globalStyles(theme),
    listItem: {
        border: "1px solid #fff",
        borderRadius: 15,
        marginBottom: 5,
        paddingTop: 15,
        paddingBottom: 15,
    },
    rootDrawer: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    appbarContent: {
      alignItems: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    leftToolbarLink: {
        underline: "none"
    }
});

export const useHarnessStyles = makeStyles(harnessStyles, {name: "HarnessStyles"});

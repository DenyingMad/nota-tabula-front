import React from 'react';
import {Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';

const HarnessView = (props) => {
    const {children} = props;
    return (
        <div>
            <LeftToolBar/>
            <Container>
                {children}
            </Container>
        </div>
    );
};

const drawerWidth = 220;

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#061c34",
        borderRight: "1px solid #777777",
        padding: 15,
    },
    listItem: {
        border: "1px solid #fff",
        borderRadius: 15,
        marginBottom: 5,
        paddingTop: 15,
        paddingBottom: 15,
    }
})

const SECTIONS = [
    {
        sectionName: 'Dashboard',
        Icon: DashboardIcon,
        href: '/dashboard',
    },
    {
        sectionName: 'Reports',
        Icon: AssessmentIcon,
        href: '/reports',
    },
    {
        sectionName: 'Login',
        Icon: DashboardIcon,
        href: '/login',
    },
    {
        sectionName: 'Register',
        Icon: DashboardIcon,
        href: '/join',
    },
]

const LeftToolBar = () => {
    const classes = useStyles();
    return (
        <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant="permanent" anchor="left">
            <div className="leftToolbar-header">Project cool name</div>
            <Divider/>
            <List>
                {SECTIONS.map((section) => (
                    <Link to={section.href} key={section.sectionName} className="leftToolbar-link">
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon className="section-icon">
                                <section.Icon/>
                            </ListItemIcon>
                            <ListItemText primary={section.sectionName}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default withRouter(HarnessView);
import React from 'react';
import {Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {useHarnessStyles} from "./HarnessStyles";

const HarnessView = (props) => {
    const {children} = props;
    const classes = useHarnessStyles();
    return (
        <div className={classes.flexRow}>
            <LeftToolBar/>
            <Container className={classes.mainContainer}>
                {children}
            </Container>
        </div>
    );
};

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
    const classes = useHarnessStyles();
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
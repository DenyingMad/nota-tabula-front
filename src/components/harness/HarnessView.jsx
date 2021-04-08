import React from 'react';
import {Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {useHarnessStyles} from "./HarnessStyles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {ChevronLeft, ChevronRight, Menu} from "@material-ui/icons";

const HarnessView = (props) => {
    const {children} = props;
    const classes = useHarnessStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.flexRow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Nota Tabula
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftToolBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Container className={clsx(classes.mainContainer, classes.content)}>
                <div className={classes.toolbar}>
                    {children}
                </div>
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
]

const LeftToolBar = (props) => {
    const classes = useHarnessStyles();
    const theme = useTheme();
    return (
        <div className={classes.rootDrawer}>

            <Drawer
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
                variant="permanent"
                open={props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight/> : <ChevronLeft/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {SECTIONS.map((section) => (
                        <Link
                            to={section.href}
                            key={section.sectionName}
                            className="leftToolbar-link"
                        >
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
        </div>
    );
};

export default withRouter(HarnessView);
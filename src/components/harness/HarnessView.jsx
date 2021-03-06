import React from 'react';
import {Container} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {useHarnessStyles} from "./HarnessStyles";
import clsx from "clsx";
import {LeftToolBar} from "./LeftToolbar";
import {HarnessAppBar} from "./HarnessAppBar";
import {removeUserToken} from "../../api/SecurityApi";
import {Settings} from "@material-ui/icons";

const HarnessView = (props) => {
    const classes = useHarnessStyles();

    const {children, history} = props;

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleAccountMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAccountMenuClose = () => {
        setAnchorEl(null);
    };
    const handleAccountLogout = () => {
        setAnchorEl(null);
        removeUserToken();
        history.push("/login");
    };
    const handleAccountGoProfile = () => {
        setAnchorEl(null);
        history.push("/profile");
    };

    return (
        <div className={classes.flexRow}>
            <HarnessAppBar
                anchorEl={anchorEl}
                handleAccountLogout={handleAccountLogout}
                handleAccountGoProfile={handleAccountGoProfile}
                handleAccountMenuClick={handleAccountMenuClick}
                handleAccountMenuClose={handleAccountMenuClose}
                handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <LeftToolBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                sections={SECTIONS}
            />
            <Container maxWidth={false} className={clsx(classes.content)}>
                <div className={clsx(classes.toolbar, classes.mainContainer)}>
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
    {
        sectionName: 'Settings',
        Icon: Settings,
        href: '/profile',
    }
];

export default withRouter(HarnessView);

import React from 'react';
import {Container} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {useHarnessStyles} from "./HarnessStyles";
import clsx from "clsx";
import {LeftToolBar} from "./LeftToolbar";
import {HarnessAppBar} from "./HarnessAppBar";

const HarnessView = (props) => {
    const classes = useHarnessStyles();

    const {children} = props;

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.flexRow}>
            <HarnessAppBar
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
];

export default withRouter(HarnessView);

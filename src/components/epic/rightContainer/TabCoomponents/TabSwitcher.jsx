import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import clsx from "clsx";
import {Assessment, GridOn, List} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import {TabProps} from "./TabPanel";
import Paper from "@material-ui/core/Paper";
import {useRightContainerStyles} from "../RightContainerStyles";

export const TabSwitcher = (props) => {
    const classes = useRightContainerStyles();

    return (
        <Paper square className={classes.tabsBar}>
            <Tabs
                value={props.selectedLayout}
                onChange={props.handlerChangeTab}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                <Tab
                    className={classes.tab}
                    label={
                        <div className={clsx(classes.flexRow, classes.iconLabel)}>
                            <List fontSize="small"/>
                            <Typography variant="body2">
                                Task Lists
                            </Typography>
                        </div>
                    }
                    {...TabProps(0)} />
                <Tab
                    className={classes.tab}
                    label={
                        <div className={clsx(classes.flexRow, classes.iconLabel)}>
                            <GridOn fontSize="small"/>
                            <Typography variant="body2">
                                Kanban
                            </Typography>
                        </div>
                    }
                    {...TabProps(1)} />
                <Tab
                    className={classes.tab}
                    label={
                        <div className={clsx(classes.flexRow, classes.iconLabel)}>
                            <Assessment fontSize="small"/>
                            <Typography variant="body2">
                                Grant Chart
                            </Typography>
                        </div>
                    }
                    {...TabProps(2)} />
            </Tabs>
        </Paper>
    );
};

import React, {useState} from "react";
import {useRightContainerStyles} from "./RightContainerStyles";
import clsx from "clsx";
import {TaskGroupList} from "../../taskGroupList/TaskGroupList";
import {Kanban} from "../../kanban/Kanban";
import {GrantChart} from "../../grantChart/GrantChart";
import Tab from "@material-ui/core/Tab";
import {Add, Assessment, GridOn, List} from "@material-ui/icons";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const TabPanel = props => {
    const {children, value, index, classes, ...other} = props;
    return (
        <div
            className={clsx(classes.fullWidth, classes.scrollY)}
            role="tabpanel"
            hidden={value !== index}
            id={`layoutTabPanel${index}`}
            aria-labelledby={`layoutTabPanelTab${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

const TabProps = index => {
    return {
        id: `layoutTab${index}`,
        'aria-controls': `layoutTabPanel${index}`,
    };
}

export const RightContainer = (props) => {
    const taskLists = props.taskLists;
    const classes = useRightContainerStyles();
    const [selectedLayout, setSelectedLayout] = useState(0);
    const handlerChangeTab = (event, newSelected) => {
        setSelectedLayout(newSelected);
    };
    return (
        <div className={clsx(classes.flexColumn, classes.epicRightSide)}>
            <Paper square className={classes.tabsBar}>
                <Tabs
                    value={selectedLayout}
                    onChange={handlerChangeTab}
                    // centered
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
            <TabPanel value={selectedLayout} index={0} classes={classes}>
                <div>
                    <TaskGroupList
                        epicId={props.epicId}
                        taskLists={taskLists}
                    />
                    <Button
                        type="button"
                        className={clsx(
                            classes.addItemButton,
                            classes.fullWidth
                        )}
                        variant="contained"
                        startIcon={<Add/>}
                        onClick={() => props.handlerAddTaskList(props.epicId)}
                    >
                        <Typography variant="body1">
                            Add Task List
                        </Typography>
                    </Button>
                </div>
            </TabPanel>
            <TabPanel value={selectedLayout} index={1} classes={classes}>
                <Kanban/>
            </TabPanel>
            <TabPanel value={selectedLayout} index={2} classes={classes}>
                <GrantChart/>
            </TabPanel>
        </div>
    )
}
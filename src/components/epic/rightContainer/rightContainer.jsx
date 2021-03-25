import React, {useState} from "react";
import {useRightContainerStyles} from "./rightContainerStyles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {TaskGroupList} from "../../taskGroupList/taskGroupList";
import {Kanban} from "../../kanban/kanban";
import {GrantChart} from "../../grantChart/grantChart";
import Typography from "@material-ui/core/Typography";
import {Add} from "@material-ui/icons";

export const RightContainer = (props) => {
    const classes = useRightContainerStyles();
    const [selectedLayout, setSelectedLayout] = useState(1);
    const epicData = props.epicData;
    let layout;
    if (selectedLayout === 1) {
        layout = <TaskGroupList epicData={epicData}/>
    }
    else if (selectedLayout === 2) {
        layout = <Kanban/>
    }
    else if (selectedLayout === 3) {
        layout = <GrantChart/>
    }
    return (
        <div className={clsx(classes.flexColumn, classes.epicRightSide)}>
            <div className={classes.buttonsContainer}>
                <Button
                    className={classes.switchButton}
                    variant="outlined"
                    onClick={() => {
                        setSelectedLayout(1)
                    }}
                >
                    Task Lists
                </Button>
                <Button
                    className={classes.switchButton}
                    variant="outlined"
                    onClick={() => {
                        setSelectedLayout(2)
                    }}
                >
                    Kanban
                </Button>
                <Button
                    className={classes.switchButton}
                    variant="outlined"
                    onClick={() => {
                        setSelectedLayout(3)
                    }}
                >
                    Grant Chart
                </Button>
            </div>
            {layout}
            <Button
                className={clsx(
                    classes.addItemButton
                )}
                variant="contained"
                startIcon={<Add />}
                // onClick={}
                >
                <Typography variant="body1">
                    Add Task List
                </Typography>
            </Button>
        </div>
    )
}
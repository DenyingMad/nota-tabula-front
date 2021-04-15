import React from "react";
import {Epic} from "../../components/epic/Epic";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {Add} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {useDashboardStyles} from "./DashboardStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const DashboardView = (props) => {
    const classes = useDashboardStyles();

    return (
        <div className={clsx(classes.flexColumn, classes.fullWidth)}>
            <List>
                {props.epics.map((epic) => (
                    <ListItem
                        key={epic.epicId}
                    >
                        <Epic epicData={epic}/>
                    </ListItem>
                ))}
            </List>
            <Button
                className={clsx(
                    classes.addItemButton,
                    classes.buttonLightBlueColor
                )}
                variant="contained"
                startIcon={<Add/>}
                onClick={props.handlerAddEpic}
            >
                <Typography variant="body1">
                    Add Epic
                </Typography>
            </Button>
        </div>
    );
};

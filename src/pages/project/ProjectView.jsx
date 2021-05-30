import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Epic} from "../../components/epic/Epic";
import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useProjectStyles} from "./ProjectStyles";

export const ProjectView = (props) => {
    const classes = useProjectStyles();

    return (
        <div className={clsx(classes.flexColumn, classes.fullWidth)}>
            <List>
                {props.epics.map((epic) => (
                    <ListItem
                        key={epic.epicId}
                    >
                        <Epic epicData={epic}
                              handlerDeleteEpic={props.handlerDeleteEpic}
                        />
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
import React, {useEffect, useState} from "react";
import {Epic} from "../../components/epic/Epic";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {Add} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {useDashboardStyles} from "./DashboardStyles";
import {createEpic, getAllEpics} from "../../api/EpicApi";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const Dashboard = (props) => {
    const classes = useDashboardStyles();
    const [epics, setEpics] = useState([]);
    const handlerAddEpic = () => {
        AddEpic(epics, setEpics);
    }
    useEffect(() => {
        getAllEpics()
            .then(r => setEpics(r.data))
            .catch(error => console.log(error));
    },[]);
    return (
        <div className={clsx(classes.flexColumn, classes.fullWidth)}>
            <List>
                {epics.map((epic) => (
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
                    classes.addEpicButton
                )}
                variant="contained"
                startIcon={<Add/>}
                onClick={handlerAddEpic}
            >
                <Typography variant="body1">
                    Add Epic
                </Typography>
            </Button>
        </div>
    )
}

const AddEpic = (epics, setEpics) => {
    createEpic()
        .then(r => {
            setEpics([...epics,r] );
        })
        .catch(error => console.log(error));
}
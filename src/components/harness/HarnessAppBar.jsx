import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useHarnessStyles} from "./HarnessStyles";

export const HarnessAppBar = (props) => {
    const classes = useHarnessStyles();
    return (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
        })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, props.open && classes.hide)}
            >
                <Menu/>
            </IconButton>
            <Typography variant="h5" noWrap>
                Nota Tabula
            </Typography>
        </Toolbar>
    </AppBar>
    )
}
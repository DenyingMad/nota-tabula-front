import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle, List} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import {useHarnessStyles} from "./HarnessStyles";
import {Menu, MenuItem} from "@material-ui/core";
import {AppContext} from "../../AppContext";

export const HarnessAppBar = (props) => {
    const classes = useHarnessStyles();

    const [context, setContext] = useContext(AppContext);

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <div className={clsx(classes.flexRow, classes.fullWidth, classes.appbarContent)}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, props.open && classes.hidden)}
                    >
                        <List/>
                    </IconButton>
                    <Typography variant="h5" noWrap align="center">
                        Nota Tabula
                    </Typography>
                    <IconButton
                        aria-label="user-details"
                        aria-haspopup="true"
                        onClick={props.handleAccountMenuClick}
                        className={clsx(classes.flexForceRight, !Boolean(context) && classes.hidden)}
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={props.anchorEl}
                        keepMounted
                        open={Boolean(props.anchorEl)}
                        onClose={props.handleAccountMenuClose}
                    >
                        <MenuItem onClick={props.handleAccountGoProfile}>Profile</MenuItem>
                        <MenuItem onClick={props.handleAccountLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

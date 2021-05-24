import {useHarnessStyles} from "./HarnessStyles";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {Link} from "react-router-dom";
import React from "react";

export const LeftToolBar = (props) => {
    const classes = useHarnessStyles();
    const theme = useTheme();

    return (
        <div className={classes.rootDrawer}>
            <Drawer
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
                variant="permanent"
                open={props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight/> : <ChevronLeft/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {props.sections.map((section) => (
                        <Link
                            to={section.href}
                            key={section.sectionName}
                            style={{ textDecoration: 'none', color: '#000000' }}
                        >
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon className="section-icon">
                                    <section.Icon/>
                                </ListItemIcon>
                                <ListItemText primary={section.sectionName}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

import React from "react";
import {AccountCircle} from "@material-ui/icons";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";

export const TaskShared = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <AccountCircle className={classes.flexForceRight}/>
    );
};

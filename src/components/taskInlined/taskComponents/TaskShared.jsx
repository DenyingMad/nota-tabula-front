import React from "react";
import {AccountCircle} from "@material-ui/icons";
import {useTaskInlinedStyles} from "../TaskInlinedStyles";
import clsx from "clsx";

export const TaskShared = (props) => {
    const classes = useTaskInlinedStyles();

    return (
        <AccountCircle className={clsx(classes.flexForceRight, classes.hidden)}/>
    );
};

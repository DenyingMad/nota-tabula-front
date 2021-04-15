import React from "react";
import {Typography} from "@material-ui/core";

export const SharedWith = (props) => {

    return (
        <div className={props.style}>
            <Typography
                variant="h6"
            >
                Epic shared with:
            </Typography>
        </div>
    );
};

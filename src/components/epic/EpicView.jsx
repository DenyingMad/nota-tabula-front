import React from "react";
import {useEpicStyles} from "./EpicStyles";
import clsx from "clsx";
import {LeftContainer} from "./leftContainer/leftContainer";
import {RightContainer} from "./rightContainer/rightContainer";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

export const EpicView = (props) => {
    const classes = useEpicStyles();
    return (
        <div className={classes.flexColumn}>
            <Card className={clsx(classes.mainEpicContainer)}>
                <LeftContainer
                    epicData={props.epicData}
                    />
                <RightContainer
                    epicData={props.epicData}
                    />
            </Card>
            <Button
                className={clsx(
                    classes.addItemButton,
                    classes.addEpicButton
                )}
                variant="contained"
                startIcon={<Add />}
                // onClick={}
            >
                <Typography variant="body1">
                    Add Epic
                </Typography>
            </Button>
        </div>
    )
};
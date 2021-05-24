import React from "react";
import {useProfileStyles} from "./ProfileStyles";
import {Card, TextField, Typography} from "@material-ui/core";
import clsx from "clsx";
import * as Yup from "yup";
import {passwordValidation} from "../../utils/credentialsValidation";

const validationSchema = Yup.object({
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'Min password length 8')
        .max(32, 'Password must be less than 32 characters')
        .test("asyncPasswordValidation", "Default password validation error", function (value) {
            return passwordValidation(value)
                .then((response) => {
                    return true;
                })
                .catch((errorMessage) => {
                    return this.createError({message: errorMessage});
                });
        })
})

export const Profile = () => {
    const classes = useProfileStyles();

    return (
        <Card
            className={clsx(classes.flexColumn, classes.fullWidth, classes.profileCard)}
        >
            <Typography variant="h4" align="left">
                {"User Name"}
            </Typography>
            <Typography variant="body1" align="left">
                Your current user name.
            </Typography>
            <TextField
                id="change-username"
                label="Current Username"
                defaultValue="sample_username"
                helperText="Change your user name here."
                className={clsx(classes.textField)}
            />
        </Card>
    )
}

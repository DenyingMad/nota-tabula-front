import React from "react";
import {Button, Card, FormHelperText, Input, InputLabel, TextField, Typography} from "@material-ui/core";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import {useProfileStyles} from "./ProfileStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const ProfileView = (props) => {
    const classes = useProfileStyles();

    return (
        <Card
            className={clsx(classes.flexColumn, classes.fullWidth, classes.profileCard)}
        >
            <Typography variant="h4" align="left">
                {props.userDetails.login}
            </Typography>
            <Typography variant="body1" align="left">
                Your current login.
            </Typography>
            <FormControl className={clsx(classes.textField)}>
                <InputLabel htmlFor="change-username">Current Username</InputLabel>
                <Input
                    id="change-login"
                    value={props.newUsername}
                    onChange={props.handleLoginChange}
                    aria-describedby="change-username-text"
                />
                <FormHelperText id="change-username-text">Enter new user name here.</FormHelperText>
                <Button
                    className={clsx(
                        classes.addItemButton,
                        classes.buttonTealColor
                    )}
                    onClick={(e) => props.handleSubmitUserName(props.newUsername, e)}
                >
                    <Typography variant="body1">
                        Change Username
                    </Typography>
                </Button>
            </FormControl>
            <form className={clsx(classes.flexColumn, classes.textField)} onSubmit={props.handleSubmit}>
                <TextField
                    id="change_password"
                    name="password"
                    label="Current Password"
                    size="small"
                    type={props.passwordVisibility ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={props.handleClickShowPassword}
                                >
                                    {props.passwordVisibility ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    value={props.values.password}
                    onChange={props.handlePasswordChange}
                    error={props.touched.password && Boolean(props.errors.password)}
                    helperText={props.touched.password && props.errors.password}
                />
                <Button
                    className={clsx(
                        classes.addItemButton,
                        classes.buttonTealColor
                    )}
                    type="submit">
                    <Typography variant="body1">
                        Change Password
                    </Typography>
                </Button>
            </form>
        </Card>
    )
}

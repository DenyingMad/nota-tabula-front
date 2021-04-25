import React from "react";
import {Button, TextField} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import {useLoginStyles} from "./LoginStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


export const LoginForm = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    // styles
    const classes = useLoginStyles();
    // forgot password link placeholder
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={classes.mainContainer}>
            <div className={clsx(classes.authFormContainer, classes.flexColumn)}>
                <Paper className={classes.containerPaper} elevation={3}>
                    <form className={classes.flexColumn} onSubmit={handleSubmit}>
                        <Typography className={classes.title} variant="h5" align="center" gutterBottom>
                            Sign in
                        </Typography>
                        <TextField
                            id="login_email"
                            name="email"
                            label="Email address"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.inputField
                                }
                            }}
                            size="small"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <TextField
                            id="login_password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            type={props.passwordVisibility ? "text" : "password"}
                            InputProps={{
                                classes: {
                                    root: classes.inputField
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={props.handlerPassword}
                                        >
                                            {props.passwordVisibility ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            size="small"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <Link
                            href="#"
                            onClick={preventDefault}
                            variant="inherit"
                            underline="none">
                            {' Forgot password?'}
                        </Link>
                        {props.message ?
                            <Typography variant="body1" color="error">{props.message}</Typography>
                            : null}
                        <Button
                            className={clsx(classes.addItemButton, classes.buttonTealColor)}
                            type="submit">
                            <Typography variant="body1">
                                Sign in
                            </Typography>
                        </Button>
                    </form>
                </Paper>
                <Paper className={classes.containerPaper} elevation={3}>
                    <Typography variant="body1" align="center" gutterBottom>
                        New to Nota Tabula?
                        <Link href="/join" variant="inherit" underline="none">
                            {' Create an account.'}
                        </Link>
                    </Typography>
                </Paper>
            </div>
        </div>
    );
};
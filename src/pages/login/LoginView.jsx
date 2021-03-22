import React from "react";
import {Button, TextField} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../../styles/AuthorisationStyles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import clsx from "clsx";


export const LoginForm = (props) => {
    const classes = useStyles();
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={classes.root}>
            <Paper className={classes.upperPaper} elevation={3}>
                <Typography className={clsx(classes.upperTitle)} variant="h5" align="center" gutterBottom>
                    Sign in
                </Typography>
                <form className={classes.flexRoot} onSubmit={handleSubmit}>
                    <TextField
                        className={clsx(classes.inputElement, classes.sideMargin)}
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
                        className={clsx(classes.inputElement, classes.sideMargin)}
                        id="login_password"
                        name="password"
                        label="Password"
                        type="password"
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
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                    />
                    <Link
                        className={clsx(
                            classes.forgotLink,
                            classes.sideMargin
                        )}
                        href="#" onClick={preventDefault}
                        variant="inherit"
                        underline="none">
                        {' Forgot password?'}
                    </Link>
                    <Button
                        className={clsx(
                            classes.authButtonMargin,
                            classes.sideMargin,
                            classes.authButtonStyled
                        )}
                        type="submit">
                        <Typography variant="body1">
                            Sign in
                        </Typography>
                    </Button>
                </form>
            </Paper>
            <Paper elevation={3}>
                <Typography className={classes.lowerText} variant="body1" align="center" gutterBottom>
                    New to Nota Tabula?
                    <Link href="#" onClick={preventDefault} variant="inherit" underline="none">
                        {' Create an account.'}
                    </Link>
                </Typography>
            </Paper>
        </div>
    );
};
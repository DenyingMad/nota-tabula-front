import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {buttonTheme, useStyles} from "./RegisterStyles";
import clsx from "clsx";
import Link from "@material-ui/core/Link";

export const RegisterView = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    // styles
    const classes = useStyles();
    // password visibility hooks
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    // placeholder for link
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={classes.root}>
            <Paper className={classes.upperPaper} elevation={3}>
                <form className={classes.flexRoot} onSubmit={handleSubmit}>
                    <Typography className={clsx(classes.upperTitle)} variant="h5" align="center" gutterBottom>
                        Sign up
                    </Typography>
                    <TextField
                        className={clsx(classes.inputElement, classes.sideMargin)}
                        id="reg_username"
                        name="login"
                        label="Username"
                        type="text"
                        variant="outlined"
                        size="small"
                        value={values.login}
                        onChange={handleChange}
                        error={touched.login && Boolean(errors.login)}
                        helperText={touched.login && errors.login}
                    />
                    <TextField
                        className={clsx(classes.inputElement, classes.sideMargin)}
                        id="reg_email"
                        name="email"
                        label="Email address"
                        variant="outlined"
                        size="small"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <TextField
                        className={clsx(classes.inputElement, classes.sideMargin)}
                        id="reg_password"
                        name="password"
                        label="Password"
                        size="small"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                    />
                        <Button className={clsx(classes.signInButton, classes.sideMargin)} type="submit">
                            <Typography variant="body1" align="center" gutterBottom>
                                Create an account
                            </Typography>
                        </Button>
                </form>
            </Paper>
            <Paper elevation={3}>
                <Typography className={classes.lowerText} variant="body1" align="center" gutterBottom>
                    Already have an account?
                    <Link href="#" onClick={preventDefault} variant="inherit" underline="none">
                        {' Sign in.'}
                    </Link>
                </Typography>
            </Paper>
        </div>
    );
}
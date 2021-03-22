import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useStyles} from "../../styles/AuthorisationStyles";
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    const [checkMark, setCheckMark] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleCheckMark = () => setCheckMark(!checkMark);
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
                        type="text"
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
                        id="reg_password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: false,
                            classes: {
                                root: classes.inputLabel
                            }
                        }}
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            classes: {
                                root: classes.inputField
                            },
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
                        size="small"
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.checkMarkButton}
                                checked={checkMark}
                                onChange={handleCheckMark}
                                name="announcementsCheckmark"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="caption">
                                Send me occasional product updates, announcements and offers.
                            </Typography>
                        }
                    />
                    <Button
                        className={clsx(
                            classes.authButtonMargin,
                            classes.sideMargin,
                            classes.authButtonStyled
                        )}
                        type="submit">
                        <Typography variant="body1">
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
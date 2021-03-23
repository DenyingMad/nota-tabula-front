import React from "react";
import {Button, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {useRegisterStyles} from "./RegisterStyles";

export const RegisterView = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    // styles
    const classes = useRegisterStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={clsx(classes.authFormContainer, classes.flexColumn)}>
                <Paper className={classes.containerPaper} elevation={3}>
                    <form className={classes.flexColumn} onSubmit={handleSubmit}>
                        <Typography className={classes.title} variant="h5" align="center" gutterBottom>
                            Sign up
                        </Typography>
                        <TextField
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
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={props.checkBoxState}
                                    onChange={props.handleCheckBox}
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
                                classes.submitButton
                            )}
                            type="submit">
                            <Typography variant="body1">
                                Create an account
                            </Typography>
                        </Button>
                    </form>
                </Paper>
                <Paper elevation={3} className={classes.containerPaper}>
                    <Typography variant="body1" align="center" gutterBottom>
                        Already have an account?
                        <Link href="/login" variant="inherit" underline="none">
                            {' Sign in.'}
                        </Link>
                    </Typography>
                </Paper>
            </div>
        </div>
    );
}
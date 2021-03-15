import React from "react";
import {Button, TextField} from "@material-ui/core";

export const RegisterView = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="reg_username"
                    name="login"
                    label="Username"
                    type="text"
                    value={values.login}
                    onChange={handleChange}
                    error={touched.login && Boolean(errors.login)}
                    helperText={touched.login && errors.login}
                />
                <TextField
                    id="reg_email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />
                <TextField
                    id="reg_password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
}
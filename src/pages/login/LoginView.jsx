import React from "react";
import {Button, TextField} from "@material-ui/core";


export const LoginForm = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="login_email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />
                <TextField
                    id="login_password"
                    name="password"
                    label="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                />
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    );
};
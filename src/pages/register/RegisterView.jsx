import React from "react";
import {Button, TextField} from "@material-ui/core";

export const RegisterForm = (props) => {
    const values = props.values;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const touched = props.touched;
    const errors = props.errors;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="username"
                    name="username"
                    label="Username"
                    type="username"
                    value={values.username}
                    onChange={handleChange}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />
                <TextField
                    id="password"
                    name="password"
                    label="password"
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
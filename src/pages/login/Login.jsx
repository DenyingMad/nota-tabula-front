import React from 'react'
import {useFormik} from 'formik';
import {LoginForm} from "./LoginView";
import * as Yup from 'yup';
import {login} from "../../api/securityApi";

const validationSchema = Yup.object({
    email: Yup
        .string()
        .required('Email is required')
        .email('Enter valid email'),
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'Min password length 8'),
})

export const Login = props => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(`Credentials check success: ${values.email} ${values.password}`);
            login(values)
                .then(r => console.log(r))
                .catch(error => console.log(error));
        }
    })
    return (
        <LoginForm
            values={formik.values}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            touched={formik.touched}
        />
    )
}

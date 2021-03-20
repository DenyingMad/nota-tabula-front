import React from 'react'
import {useFormik} from 'formik';
import {RegisterView} from "./RegisterView";
import * as Yup from 'yup';
import {register} from "../../api/securityApi";
import {passwordValidation} from "../../utils/credentialsValidation";
import {usernameValidation} from "../../utils/credentialsValidation";

const validationSchema = Yup.object({
    login: Yup
        .string()
        .required('Username is required')
        .min(6, "Username must be at least 4 characters long")
        .max(30, "Username is too long")
        .test("asyncUsernameValidation", "Default error message", function (value) {
            return usernameValidation(value)
                .then((response) => {
                    return true;
                })
                .catch((errorMessage) => {
                    return this.createError({ message: errorMessage });
                });
        }),
    email: Yup
        .string()
        .required('Email is required')
        .email('Enter valid email'),
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'Min password length 8')
        .max(32, 'Password must be less than 32 characters')
        .test("asyncPasswordValidation", "Default password validation error", function (value) {
            return passwordValidation(value)
                .then((response) => {
                    return true;
                })
                .catch((errorMessage) => {
                    return this.createError({ message: errorMessage });
                });
        })
})

export const Register = props => {
    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(`Credentials check success: ${values.username} ${values.email} ${values.password}`);
            register(values)
                .then(r => console.log(r))
                .catch(ex => console.log(ex));
        }
    })
    return (
        <RegisterView
            values={formik.values}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            touched={formik.touched}
        />
    )
}
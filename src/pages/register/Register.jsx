import React from 'react'
import {useFormik} from 'formik';
import {RegisterForm} from "./RegisterView";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup
        .string()
        .required('Username is required')
        .min(8, "Username must be at least 8 characters long")
        // кастомная функция для проверки, пример, позже нужен будет реджекс
        .test('usernameValid', 'Username must not contain @',
            async username => !((await username) && (await username).includes('@')))
            ,
    email: Yup
        .string()
        .required('Email is required')
        .email('Enter valid email'),
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'Min password length 8'),
})

export const Register = props => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(`Credentials check success: ${values.username} ${values.email} ${values.password}`);
        }
    })
    return (
        <RegisterForm
            values={formik.values}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            touched={formik.touched}
        />
    )
}
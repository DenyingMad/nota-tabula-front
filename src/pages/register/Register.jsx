import React, {useContext, useState} from 'react'
import {useFormik} from 'formik';
import {RegisterView} from "./RegisterView";
import * as Yup from 'yup';
import {passwordValidation, usernameValidation} from "../../utils/credentialsValidation";
import {AppContext} from "../../AppContext";
import * as securityApi from "../../api/SecurityApi";

const handleRegister = (history, context, setContext, setError) => (values) => {
    return securityApi.register(values)
        .then(currentUser => {
            return securityApi.login(values)
                .then(currentUser => {
                    setContext({...context, currentUser});
                    if (!currentUser)
                        return currentUser;
                    else
                        return history.push("/dashboard");
                });
        })
        .catch(error => {
            setError("Login or email are already taken.");
            console.log(error);
        });
};

const validationSchema = Yup.object({
    login: Yup
        .string()
        .required('Username is required')
        .min(5, "Username must be at least 5 characters long")
        .max(30, "Username is too long")
        .test("asyncUsernameValidation", "Default error message", function (value) {
            return usernameValidation(value)
                .then((response) => {
                    return true;
                })
                .catch((errorMessage) => {
                    return this.createError({message: errorMessage});
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
                    return this.createError({message: errorMessage});
                });
        })
})

export const Register = props => {
    const [context, setContext] = useContext(AppContext);
    const [registerError, setRegisterError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [checkMark, setCheckMark] = useState(false);

    const onRegister = handleRegister(props.history, context, setContext, setRegisterError);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleCheckBox = () => setCheckMark(!checkMark);

    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            return onRegister(values);
        }
    });

    return (
        <RegisterView
            values={formik.values}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            message={registerError}
            touched={formik.touched}
            passwordVisibility={showPassword}
            handlerPassword={handleClickShowPassword}
            checkBoxState={checkMark}
            handleCheckBox={handleCheckBox}
        />
    )
}

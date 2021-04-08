import React, {useContext, useState} from 'react'
import {useFormik} from 'formik';
import {LoginForm} from "./LoginView";
import * as Yup from 'yup';
import * as securityApi from "../../api/SecurityApi";
import {AppContext} from "../../AppContext";

const handleLogin = (history, location, context, setContext, setError) => (values) => {
    return securityApi.login(values)
        .then(currentUser => {
            setContext({...context, currentUser});
            if (!currentUser)
                return currentUser;
            if (location && location.state && location.state.from)
                return history.push(location.state.from);
            else
                return history.push("/dashboard");
        })
        .catch(error => {
            setError("Incorrect username or password.");
            console.log(error);
        });
};

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
    const [context, setContext] = useContext(AppContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState();

    const {history, location} = props;
    const onLogin = handleLogin(history, location, context, setContext, setLoginError);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            return onLogin(values);
        },
    });
    return (
        <LoginForm
            values={formik.values}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            message={loginError}
            touched={formik.touched}
            passwordVisibility={showPassword}
            handlerPassword={handleClickShowPassword}
        />
    )
}

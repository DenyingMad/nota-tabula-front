import React, {useContext, useEffect, useState} from "react";
import * as Yup from "yup";
import {passwordValidation} from "../../utils/credentialsValidation";
import {AppContext} from "../../AppContext";
import {changeUsername, changeUserPassword, getUserDetails, getUserDetailsByLogin} from "../../api/UserApi";
import {useFormik} from "formik";
import {ProfileView} from "./ProfileView";

const handleChangePassword = (setError) => (values) => {
    // dont call this yet

    return changeUserPassword(values)
        .then(r => {
        })
        .catch(error => {
            setError("Sample Error.");
            console.log(error);
        });
};

const validationSchema = Yup.object({
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
});

export const Profile = () => {
    const [context, setContext] = useContext(AppContext);
    const [userDetails, setUserDetails] = useState({});
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("If you see this, there's an error");
    const [PasswordError, setPasswordError] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const onChangePassword = handleChangePassword(setPasswordError);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleLoginChange = (event) => {
        setNewUsername(event.target.value)
    };
    const handleSubmitUserName = (newUserName) => {
        // call API
        changeUsername(newUsername)
            .then(r => {})
            .catch(err => console.log(err))
    };

    useEffect(() => {
        let cleanupFunction = false;
        getUserDetailsByLogin(context.currentUser)
            .then(r => {
                if (!cleanupFunction) {
                    setUserDetails(r);
                    setNewPassword(r.password);
                }
            })
            .catch(error => console.log(error));
        getUserDetails()
            .then(r => {
                if(r.userName) setNewUsername(r.userName);
                else setNewUsername("Default userName");
            })
            .catch(err => console.log(err))
        return () => cleanupFunction = true;
    }, []);

    const formik = useFormik({
        initialValues: {
            password: newPassword,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            return onChangePassword(values);
        }
    });

    return (
        <ProfileView
            values={formik.values}
            userDetails={userDetails}
            newUsername={newUsername}
            handleLoginChange={handleLoginChange}
            handleSubmitUserName={handleSubmitUserName}
            handlePasswordChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            errors={formik.errors}
            message={PasswordError}
            touched={formik.touched}
            newPassword={newPassword}
            passwordVisibility={showPassword}
            handleClickShowPassword={handleClickShowPassword}
        />
    )
};

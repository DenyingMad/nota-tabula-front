import React, {useContext, useEffect, useState} from "react";
import * as Yup from "yup";
import {passwordValidation} from "../../utils/credentialsValidation";
import {AppContext} from "../../AppContext";
import {changeUsername, changeUserPassword, getUserDetails} from "../../api/UserApi";
import {useFormik} from "formik";
import {ProfileView} from "./ProfileView";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const handleChangePassword = (handleAlertOpen, setError) => (values) => {
    return changeUserPassword(values.password)
        .then(r => {
            handleAlertOpen("Password change successful!", "success");
        })
        .catch(error => {
            setError("Sample Error.");
            handleAlertOpen("Password change failed.", "error");
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
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState();
    const [alertDetails, setAlertDetails] = useState({
        open: false,
        message: 'default message',
        severity: 'info'
    });
    const horizontal = 'center';
    const vertical = 'top';

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertDetails({...alertDetails, open: false});
    };
    const handleAlertOpen = (message, severity) => {
        setAlertDetails({...alertDetails, open: true, message: message, severity: severity});
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleLoginChange = (event) => {
        setNewUsername(event.target.value)
    };
    const handleSubmitUserName = (newUserName) => {
        changeUsername(newUsername)
            .then(r => {
                handleAlertOpen("Successfully changed user name!", "success");
            })
            .catch(err => {
                console.log(err);
                handleAlertOpen("User name change failed.", "error");
            })
    };
    const onChangePassword = handleChangePassword(handleAlertOpen, setPasswordError);

    useEffect(() => {
        let cleanupFunction = false;
        getUserDetails()
            .then(r => {
                setUserDetails(r);
                if (r.userName) setNewUsername(r.userName);
                else setNewUsername("Default User Name");
            })
            .catch(err => console.log(err))
        return () => cleanupFunction = true;
    }, []);

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            return onChangePassword(values);
        }
    });

    return (
        <div>
            <ProfileView
                values={formik.values}
                userDetails={userDetails}
                newUsername={newUsername}
                handleLoginChange={handleLoginChange}
                handleSubmitUserName={handleSubmitUserName}
                handlePasswordChange={formik.handleChange}
                handleSubmit={formik.handleSubmit}
                errors={formik.errors}
                message={passwordError}
                touched={formik.touched}
                passwordVisibility={showPassword}
                handleClickShowPassword={handleClickShowPassword}
            />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={alertDetails.open}
                onClose={handleAlertClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleAlertClose} severity={alertDetails.severity}>
                    {alertDetails.message}
                </Alert>
            </Snackbar>
        </div>
    )
};

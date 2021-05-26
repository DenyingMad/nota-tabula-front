import {getCommonHttpRequestProps, throwHttpErrors} from "../common";
import {hardcodedProjectId, TASK_SERVICE_API_URL} from "./ServicesApiUrls";

export const getUserDetails = () =>
    fetch(`/rest/api/user`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getUserDetailsByLogin = (login) =>
    fetch(`/rest/api/user/login?login=${login}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const changeUserPassword = (password) =>
    fetch(`/rest/security/user/change-password`, {
        method: "PUT",
        body: password,
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const changeUsername = (newUsername) =>
    fetch(`/rest/api/user/username`, {
        method: "PUT",
        body: newUsername,
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

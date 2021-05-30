import {TASK_SERVICE_API_URL} from "./ServicesApiUrls";
import {getCommonHttpRequestProps, getCommonJsonRequestProps, throwHttpErrors} from "../common";

export const getPersonalProjects = () =>
    fetch(`${TASK_SERVICE_API_URL}/user/personal`, {
        method: "GET",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json());

export const getOrgProjects = () =>
    fetch(`${TASK_SERVICE_API_URL}/user/organization`, {
        method: "GET",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json());

export const createProject = (projectCreateRequest) =>
    fetch(`${TASK_SERVICE_API_URL}`, {
        method: "POST",
        body: JSON.stringify(projectCreateRequest),
        ...getCommonJsonRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json());
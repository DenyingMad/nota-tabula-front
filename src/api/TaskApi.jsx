import {getCommonHttpRequestProps, throwHttpErrors} from "../common";
import {PROJECT_API_URL} from "./EpicApi";

export const renameTask = (taskId, newName) =>
    fetch(`${PROJECT_API_URL}/task/${taskId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updatePriority = (taskId, newPriority) =>
    fetch(`${PROJECT_API_URL}/task/${taskId}/priority/${newPriority}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updateStatus = (taskId, newStatus) =>
    fetch(`${PROJECT_API_URL}/task/${taskId}/status/${newStatus}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

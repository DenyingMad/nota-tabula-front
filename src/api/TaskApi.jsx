import {getCommonHttpRequestProps, throwHttpErrors} from "../common";
import {TASK_SERVICE_API_URL} from "./ServicesApiUrls";

export const renameTask = (taskId, newName) =>
    fetch(`${TASK_SERVICE_API_URL}/task/${taskId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updatePriority = (taskId, newPriority) =>
    fetch(`${TASK_SERVICE_API_URL}/task/${taskId}/priority/${newPriority}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updateStatus = (taskId, newStatus) =>
    fetch(`${TASK_SERVICE_API_URL}/task/${taskId}/status/${newStatus}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

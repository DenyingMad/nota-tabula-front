import {getCommonHttpRequestProps, throwHttpErrors} from "../common";
import {taskServiceApiUrl} from "./EpicApi";

export const renameTask = (taskId, newName) =>
    fetch(`${taskServiceApiUrl}/task/${taskId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updatePriority = (taskId, newPriority) =>
    fetch(`${taskServiceApiUrl}/task/${taskId}/priority/${newPriority}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updateStatus = (taskId, newStatus) =>
    fetch(`${taskServiceApiUrl}/task/${taskId}/status/${newStatus}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

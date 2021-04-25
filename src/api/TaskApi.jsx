import {getCommonHttpRequestProps, throwHttpErrors} from "../common";

export const renameTask = (taskId, newName) =>
    fetch(`/api/rest/task/${taskId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updatePriority = (taskId, newPriority) =>
    fetch(`/api/rest/task/${taskId}/priority/${newPriority}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const updateStatus = (taskId, newStatus) =>
    fetch(`/api/rest/task/${taskId}/status/${newStatus}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())
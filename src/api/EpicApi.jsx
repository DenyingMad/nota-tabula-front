import {getCommonHttpRequestProps, throwHttpErrors} from "../common";
import {hardcodedProjectId, TASK_SERVICE_API_URL} from "./ServicesApiUrls";

export const createEpic = () =>
    fetch(`${TASK_SERVICE_API_URL}/${hardcodedProjectId}/epic`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getAllEpics = () =>
    fetch(`${TASK_SERVICE_API_URL}/epic`, {
        method: "GET",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTaskList = (uuid, taskListName) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${uuid}/task-list`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskListName
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTask = (uuid, taskListId, taskName) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${uuid}/task-list/${taskListId}/task`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskName,
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getEpicByUuid = (uuid) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${uuid}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getTaskById = (uuid, id) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${uuid}/task/${id}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const deleteTask = (epicId, taskListId, taskId) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${epicId}/task-list/${taskListId}/task/${taskId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteTaskList = (epicId, taskListId) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${epicId}/task-list/${taskListId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteEpic = (epicID) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${epicID}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const renameEpic = (epicId, newName) =>
    fetch(`${TASK_SERVICE_API_URL}/epic/${epicId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

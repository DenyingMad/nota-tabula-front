import {getCommonHttpRequestProps, throwHttpErrors} from "../common";

const hardcodedProjectId = "6ca8e7b2-6e6b-4c26-8355-0e17b5ea43f7";
export const PROJECT_API_URL = "/api/rest/project";

export const createEpic = () =>
    fetch(`${PROJECT_API_URL}/${hardcodedProjectId}/epic`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getAllEpics = () =>
    fetch(`${PROJECT_API_URL}/epic`, {
        method: "GET",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTaskList = (uuid, taskListName) =>
    fetch(`${PROJECT_API_URL}/epic/${uuid}/task-list`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskListName
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTask = (uuid, taskListId, taskName) =>
    fetch(`${PROJECT_API_URL}/epic/${uuid}/task-list/${taskListId}/task`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskName,
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getEpicByUuid = (uuid) =>
    fetch(`${PROJECT_API_URL}/epic/${uuid}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getTaskById = (uuid, id) =>
    fetch(`${PROJECT_API_URL}/epic/${uuid}/task/${id}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const deleteTask = (epicId, taskListId, taskId) =>
    fetch(`${PROJECT_API_URL}/epic/${epicId}/task-list/${taskListId}/task/${taskId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteTaskList = (epicId, taskListId) =>
    fetch(`${PROJECT_API_URL}/epic/${epicId}/task-list/${taskListId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteEpic = (epicID) =>
    fetch(`${PROJECT_API_URL}/epic/${epicID}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const renameEpic = (epicId, newName) =>
    fetch(`${PROJECT_API_URL}/epic/${epicId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

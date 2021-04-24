import {getCommonHttpRequestProps, throwHttpErrors} from "../common";

export const createEpic = () =>
    fetch(`/api/rest/epic`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getAllEpics = () =>
    fetch(`/api/rest/epic`, {
        method: "GET",
        ...getCommonHttpRequestProps(),
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTaskList = (uuid, taskListName) =>
    fetch(`/api/rest/epic/${uuid}/task-list`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskListName
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const createTask = (uuid, taskListId, taskName) =>
    fetch(`/api/rest/epic/${uuid}/task-list/${taskListId}/task`, {
        method: "POST",
        ...getCommonHttpRequestProps(),
        body: taskName,
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getEpicByUuid = (uuid) =>
    fetch(`/api/rest/epic/${uuid}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const getTaskById = (uuid, id) =>
    fetch(`/api/rest/epic/${uuid}/task/${id}`, {
        method: "GET",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const deleteTask = (epicId, taskListId, taskId) =>
    fetch(`/api/rest/epic/${epicId}/task-list/${taskListId}/task/${taskId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteTaskList = (epicId, taskListId) =>
    fetch(`/api/rest/epic/${epicId}/task-list/${taskListId}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const deleteEpic = (epicID) =>
    fetch(`/api/rest/epic/${epicID}`, {
        method: "DELETE",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))

export const renameTask = (taskId, newName) =>
    fetch(`/api/rest/task/${taskId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

export const renameEpic = (epicId, newName) =>
    fetch(`/api/rest/epic/${epicId}/rename/${newName}`, {
        method: "PUT",
        ...getCommonHttpRequestProps()
    })
        .then(error => throwHttpErrors(error))
        .then(response => response.json())

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

export const deleteTask = (taskId) => {
    return new Promise((resolve, reject) => {
        resolve(console.log("deleting task: "+taskId));
    })
}

export const deleteTaskList = (taskListId) => {
    return new Promise((resolve, reject) => {
        resolve(console.log("deleting task list: " + taskListId))
    })
}

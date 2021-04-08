import {
    addEpicStub,
    createTaskListStub,
    createTaskStub,
    getAllEpicsStub,
    getEpicStub,
    getTaskStub
} from "./EpicDataStubApi";
import {getCommonHttpRequestProps, getCommonJsonRequestProps, throwHttpErrors} from "../common";


// Dummy calls
// export const createEpic = () => {
//     return new Promise((resolve, reject) => {
//         resolve(addEpicStub());
//     })
// }

// export const createTaskList = (uuid) => {
//     return new Promise((resolve, reject) => {
//         resolve(createTaskListStub(uuid));
//     })
// }

// export const createTask = (uuid, taskListId) => {
//     return new Promise((resolve, reject) => {
//         resolve(createTaskStub(uuid, taskListId));
//     })
// }
export const getEpicByUuid = (uuid) => {
    return new Promise((resolve, reject) => {
        resolve(getEpicStub(uuid));
    })
}

export const getTaskById = (uuid, id) => {
    return new Promise((resolve, reject) => {
        resolve(getTaskStub(uuid, id));
    })
}

// export const getAllEpics = () => {
//     return new Promise((resolve, reject) => {
//         resolve(getAllEpicsStub())
//     })
// }
// Actual calls

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


export const createTaskList =(uuid) =>
    fetch(`/api/rest/epic/${uuid}/task-list`, {
        method:"POST",
        ...getCommonHttpRequestProps(),
        body: "default name"
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
//
// export const getEpicByUuid = (uuid) =>
//     fetch(`/api/rest/epic/${uuid}`, {
//         method: "GET",
//         ...getCommonHttpRequestProps()
// })
//         .then(error => throwHttpErrors(error))
//         .then(response => response.json())
//
// export const getTaskById = (uuid, id) =>
//     fetch(`/api/rest/epic/${uuid}/task/${id}`, {
//         method: "GET",
//         ...getCommonHttpRequestProps()
//     })
//         .then(error => throwHttpErrors(error))
//         .then(response => response.json())
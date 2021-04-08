const epicDataDefault = {
    "details": {
        "epicName": "Epic name",
        "epicDescription": "Epic Description",
        "totalTasks": 1,
        "totalTaskLists": 1,
        "members": [
            {
                "login": "Member Login",
                "role": "Member role"
            }
        ]
    },
    "taskLists": [
        {
            "taskListName": "string",
            "taskListId": 1,
            "tasks": [
                {
                    "assigned": {
                        "name": "string",
                        "role": "string"
                    },
                    "checked": true,
                    "taskDescription": "string",
                    "taskName": "string",
                    "priority": 0,
                    "taskId": "uuid"
                }
            ]
        }
    ],
    "epicId": "uuid"
}

const epicDataNew = [
    {
        "details": {
            "epicName": "Epic Epic",
            "epicDescription": "I (briefly) describe this epic Epic.",
            "totalTasks": 8,
            "totalTaskLists": 2,
            "members": [
                {
                    "login": "Member Login",
                    "role": "Member role"
                }
            ]
        },
        "taskLists": [
            {
                "taskListName": "Sprint Activities",
                "taskListId": 0,
                "tasks": [
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": true,
                        "taskDescription": "string",
                        "taskName": "SA task 1",
                        "priority": 1,
                        "taskId": "sa_1"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": false,
                        "taskDescription": "string",
                        "taskName": "SA task 2",
                        "priority": 2,
                        "taskId": "sa_2"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": true,
                        "taskDescription": "string",
                        "taskName": "SA task 3",
                        "priority": 3,
                        "taskId": "sa_3"
                    }
                ]
            },
            {
                "taskListName": "Engine",
                "taskListId": 1,
                "tasks": [
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": true,
                        "taskDescription": "string",
                        "taskName": "Engine task 1",
                        "priority": 3,
                        "taskId": "engine_1"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": false,
                        "taskDescription": "string",
                        "taskName": "Engine task 2",
                        "priority": 2,
                        "taskId": "engine_2"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": false,
                        "taskDescription": "string",
                        "taskName": "Engine task 3",
                        "priority": 3,
                        "taskId": "engine_3"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": false,
                        "taskDescription": "string",
                        "taskName": "Engine task 4",
                        "priority": 3,
                        "taskId": "engine_4"
                    },
                    {
                        "assigned": {
                            "name": "string",
                            "role": "string"
                        },
                        "checked": true,
                        "taskDescription": "string",
                        "taskName": "Engine task 5",
                        "priority": 1,
                        "taskId": "engine_5"
                    }
                ]
            }
        ],
        "epicId": "epic_1"
    },
];

let epicIdCounter = 0
export const addEpicStub = () => {
    console.log("add epic called, id to be used: "+epicIdCounter.toString());
    let newEpic = epicDataDefault;
    newEpic.epicId = "new_id_"+epicIdCounter.toString();
    newEpic.taskLists = [];
    epicDataNew.push(newEpic);
    epicIdCounter++;
    return newEpic;
}

export const getEpicStub = (uuid) => {
    return epicDataNew[epicDataNew.findIndex(epic => epic.epicId === uuid)];
}

export const getAllEpicsStub = () => {
    return {
        "data": epicDataNew
    }
}

let idCounter = 2;
export const createTaskListStub = (uuid) => {
    const newTaskList = {
        "taskListName": "string",
        "taskListId": idCounter,
        "tasks": []
    };
    idCounter++;
    // если пушить то первый тасклист добавляется 2 раза
    epicDataNew[epicDataNew.findIndex(epic => epic.epicId === uuid)].taskLists.push(newTaskList);
    return newTaskList;
}

export const getTaskStub = (uuid, id) => {
    const epicIndex = epicDataNew.findIndex(epic => epic.epicId === uuid);
    for (let i=0; i<epicDataNew[epicIndex].taskLists.length; i++) {
        let taskIndex = epicDataNew[epicIndex].taskLists[i].tasks.findIndex(task =>task.taskId === id);
        if (taskIndex >= 0)
            return epicDataNew[epicIndex].taskLists[i].tasks[taskIndex];
    }
}

let counter = 0;
export const createTaskStub = (uuid, taskListId) => {
    const newTask ={
        "assigned": {
            "name": "string",
            "role": "string"
        },
        "checked": false,
        "taskDescription": "string",
        "taskName": "string",
        "priority": 1,
        "taskId": "new_id_"+counter.toString(),
    };
    // если пушить то таск создается 2 раза
    const epicIndex = epicDataNew.findIndex(epic => epic.epicId === uuid);
    const taskListIndex = epicDataNew[epicIndex].taskLists
        .findIndex(taskList => taskList.id === taskListId)
    epicDataNew[epicIndex].taskLists[taskListIndex].tasks.push(newTask);
    counter++;
    return newTask;
}
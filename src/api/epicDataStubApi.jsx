const userEpicData = {
    epicName: "Epic Epic",
    description: "I (briefly) describe this epic Epic.",
    info: {
        totalTaskLists: 2,
        totalTasks: 4,
    },
    taskLists: [{
        name: "Sprint Activities",
        tasks: [
            {
                checked: false,
                name: "SA task 1",
                assigned: "Person 1",
                priority: 2 // 1 - low, 1-3
            }
        ],
    },
        {
            name: "Engine",
            tasks: [
                {
                    checked: false,
                    name: "engine task 1",
                    assigned: "Person 3",
                    priority: 3 // 1 - low, 1-3
                },
                {
                    checked: false,
                    name: "engine task 2",
                    assigned: "Person 2",
                    priority: 1 // 1 - low, 1-3
                }
            ],
        }
    ],
    sharedWith: ["PersonOne", "PersonTwo", "PersonThree", "PersonFour", "PersonFive"],
}

export const getEpicData = () => {
    return userEpicData;
}
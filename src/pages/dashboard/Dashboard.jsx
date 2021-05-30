import React, {useEffect, useState} from "react";
import {DashboardView} from "./DashboardView";
import {getPersonalProjects} from "../../api/ProjectApi";

export const Dashboard = (props) => {
    const [personalProjects, setPersonalProjects] = useState([]);

    useEffect(() => {
        getPersonalProjects()
            .then(r => {
                setPersonalProjects(r.data);
            });
    }, []);

    // todo task-service stub
    // Ожидать добавления в task-service интеграции с user-service
    const orgProjects = {
        data: [
            {
                isPersonal: false,
                projectDescription: "string",
                projectId: "uuid3",
                projectName: "org Project #1"
            },
            {
                isPersonal: false,
                projectDescription: "string",
                projectId: "uuid4",
                projectName: "org Project #2"
            }
        ]
    };

    return (
        <DashboardView
            personalProjects={personalProjects}
            orgProjects={orgProjects.data}
        />
    );
};

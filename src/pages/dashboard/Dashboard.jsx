import React, {useEffect, useState} from "react";
import {DashboardView} from "./DashboardView";
import {createProject, getPersonalProjects} from "../../api/ProjectApi";

export const Dashboard = (props) => {
    const [personalProjects, setPersonalProjects] = useState([]);
    const [openCreateForm, setOpenCreateForm] = useState(false);

    useEffect(() => {
        getPersonalProjects()
            .then(r => {
                setPersonalProjects(r.data);
            });
    }, []);

    const handleOpenCreateForm = () => {
        setOpenCreateForm(true);
    };
    const handleCloseCreateForm = () => {
        setOpenCreateForm(false);
    };
    const handleSubmitCreateForm = (values) => {
        setOpenCreateForm(false);
        createProject(values)
            .then(r => {
                setPersonalProjects([...personalProjects, r]);
            })
            .catch(error => console.log(error));
    };

    return (
        <DashboardView
            personalProjects={personalProjects}
            openCreateDialog={openCreateForm}
            handleOpenCreateForm={handleOpenCreateForm}
            handleCloseCreateForm={handleCloseCreateForm}
            handleSubmitCreateForm={handleSubmitCreateForm}
        />
    );
};

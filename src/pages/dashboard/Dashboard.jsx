import React, {useEffect, useState} from "react";
import {createEpic, deleteEpic, getAllEpics} from "../../api/EpicApi";
import {DashboardView} from "./DashboardView";

export const Dashboard = (props) => {
    const [epics, setEpics] = useState([]);

    const handlerAddEpic = () => {
        AddEpic(epics, setEpics);
    };
    const handlerDeleteEpic = (epicId) => {
        DeleteEpic(epics, setEpics, epicId);
    };

    useEffect(() => {
        let cleanupFunction = false;
        getAllEpics()
            .then(r => {
                if (!cleanupFunction) setEpics(r.data);
            })
            .catch(error => console.log(error));
        return () => cleanupFunction = true;
    }, []);

    return (
        <DashboardView
            epics={epics}
            handlerAddEpic={handlerAddEpic}
            handlerDeleteEpic={handlerDeleteEpic}
        />
    );
};

const AddEpic = (epics, setEpics) => {
    createEpic()
        .then(r => {
            setEpics([...epics, r]);
        })
        .catch(error => console.log(error));
};

const DeleteEpic = (epics, setEpics, epicId) => {
    setEpics(epics.filter(item => item.epicId !== epicId))
    deleteEpic(epicId)
        .then(r => r)
        .catch(error => console.log(error))
}

import React, {useEffect, useState} from "react";
import {createEpic, getAllEpics} from "../../api/EpicApi";
import {DashboardView} from "./DashboardView";

export const Dashboard = (props) => {
    const [epics, setEpics] = useState([]);

    const handlerAddEpic = () => {
        AddEpic(epics, setEpics);
    };

    useEffect(() => {
        getAllEpics()
            .then(r => setEpics(r.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <DashboardView
            epics={epics}
            handlerAddEpic={handlerAddEpic}
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

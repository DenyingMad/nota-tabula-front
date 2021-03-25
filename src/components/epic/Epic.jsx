import React from "react";
import {EpicView} from "./EpicView";
import {getEpicData} from "../../api/epicDataStubApi";

export const Epic = (props) => {
    const epicData = getEpicData();
    return (
        <EpicView
            epicData={epicData}
        />
    )
};
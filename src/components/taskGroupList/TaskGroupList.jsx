import React from "react";
import {TaskGroupListView} from "./TaskGroupListView";

export const TaskGroupList = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlerCrudMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlerCrudActions = () => {
        setAnchorEl(null);
    };

    return (
        <TaskGroupListView
            anchorEl={anchorEl}
            handlerCrudMenu={handlerCrudMenu}
            handlerCrudActions={handlerCrudActions}
            setAnchorEl={setAnchorEl}
            epicId={props.epicId}
            taskLists={props.taskLists}
        />
    );
};

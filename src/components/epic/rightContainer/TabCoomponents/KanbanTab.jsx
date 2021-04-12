import React from "react";
import {TabPanel} from "./TabPanel";
import {Kanban} from "../../../kanban/Kanban";

export const KanbanTab = (props) => {
    return (
        <TabPanel value={props.selectedLayout} index={props.index} classes={props.classes}>
            <Kanban/>
        </TabPanel>
    )
}
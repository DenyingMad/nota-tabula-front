import React from "react";
import {useRightContainerStyles} from "./RightContainerStyles";
import clsx from "clsx";
import {TabSwitcher} from "./TabCoomponents/TabSwitcher";
import {TaskGroupTab} from "./TabCoomponents/TaskGroupTab";
import {KanbanTab} from "./TabCoomponents/KanbanTab";
import {GrantChartTab} from "./TabCoomponents/GrantChartTab";

export const RightContainerView = (props) => {
    const classes = useRightContainerStyles();
    return (
        <div className={clsx(classes.flexColumn, classes.epicRightSide)}>
            <TabSwitcher
                selectedLayout={props.selectedLayout}
                handlerChangeTab={props.handlerChangeTab}
                />
            <TaskGroupTab
                selectedLayout={props.selectedLayout}
                index={0}
                classes={classes}
                handlerAddTaskList={props.handlerAddTaskList}
                epicId={props.epicId}
                taskLists={props.taskLists}
            />
            <KanbanTab
                selectedLayout={props.selectedLayout}
                index={1}
                classes={classes}
            />
            <GrantChartTab
                selectedLayout={props.selectedLayout}
                index={2}
                classes={classes}
            />
        </div>
    )
}
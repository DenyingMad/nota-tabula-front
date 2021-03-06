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
        <div className={clsx(
            classes.flexColumn,
            classes.epicRightSide,
            classes.fullWidth
        )}>
            <TabSwitcher
                selectedLayout={props.selectedLayout}
                handlerChangeTab={props.handlerChangeTab}
            />
            <TaskGroupTab
                selectedLayout={props.selectedLayout}
                index={0}
                classes={classes}
                epicId={props.epicId}
                taskLists={props.taskLists}
                setTaskLists={props.setTaskLists}
                changeTotalTasksInEpic={props.changeTotalTasksInEpic}
                changeTotalTaskLists={props.changeTotalTaskLists}
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
    );
};

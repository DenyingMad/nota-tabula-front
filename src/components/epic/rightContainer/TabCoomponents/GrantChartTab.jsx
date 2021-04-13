import React from "react";
import {TabPanel} from "./TabPanel";
import {GrantChart} from "../../../grantChart/GrantChart";

export const GrantChartTab = (props) => {
    return (
        <TabPanel value={props.selectedLayout} index={props.index} classes={props.classes}>
            <GrantChart/>
        </TabPanel>
    );
};

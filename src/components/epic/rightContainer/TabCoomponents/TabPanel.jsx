import clsx from "clsx";
import React from "react";

export const TabPanel = props => {
    const {children, value, index, classes, ...other} = props;
    return (
        <div
            className={clsx(classes.fullWidth, classes.scrollY)}
            role="tabpanel"
            hidden={value !== index}
            id={`layoutTabPanel${index}`}
            aria-labelledby={`layoutTabPanelTab${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export const TabProps = index => {
    return {
        id: `layoutTab${index}`,
        'aria-controls': `layoutTabPanel${index}`,
    };
}
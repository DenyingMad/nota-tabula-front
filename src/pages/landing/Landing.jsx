import React from 'react';
import {Button} from "@material-ui/core";

const Landing = (props) => {
    const {history} = props;
    const handleClick = (url) => history.push(`/${url}`);
    return (
        <div>
            <Button onClick={handleClick('join')} type="button">Sign up</Button>
            <Button onClick={handleClick('login')} type="button">Sign in</Button>
        </div>
    );
};

export default Landing;
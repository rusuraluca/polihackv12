import React from "react";

import classes from "./HeadingPrimary.module.css";

import HeadingPrimaryMain from "./HeadingPrimaryMain/HeadinPrimaryMain";

const headingPrimary = () => {
    return (
        <div className={classes.HeadingPrimary}>
            <HeadingPrimaryMain />
        </div>
    );
};

export default headingPrimary;

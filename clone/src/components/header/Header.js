import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css"
import HeaderInput from "./HeaderInput"

function Header() {
    return <Fragment>
        <header className={classes.header}>
            <h1 className={classes.logo}>Hi</h1>
            <HeaderInput className={classes.search}/>
        </header>
    </Fragment>
};

export default Header;
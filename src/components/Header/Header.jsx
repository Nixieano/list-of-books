import React from 'react';
import classes from './Header.module.css';
import HeadersForm from './HeaderSearch/HeaderSerch';
import icon from '../../img/Header/31691.svg';

const Header = (props) =>{
    return (
        <div className={classes.headers}>
            <h1 className={classes.headerLogo}>Books</h1>
            <img src={icon} className={classes.headerIcon}/>
            <HeadersForm/>
        </div>
        
    )
};



export default Header;
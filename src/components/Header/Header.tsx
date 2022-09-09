import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";



type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}


const Header: React.FC<HeaderPropsType> = (props) => {
    const {isAuth, login,logout} = props
    return <header className={s.header}>
        <img
          src='https://avatanplus.com/files/resources/original/5bf19b05db22316727c58f0a.png'
            alt=""/>
        <div className={s.loginBlock}>
            {isAuth ?<div> {login}-<button onClick={logout}>Logout</button> </div>: <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>
}


export default Header;
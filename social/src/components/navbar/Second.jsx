import React from 'react';
import gon from "./second.module.css"
import {NavLink} from 'react-router-dom'
const Second = () => {
    return       <nav className={gon.nav}>
        <div className={gon.item}>
            <NavLink to='/profile' activeClassName={gon.activeLink}> <img src="images/account.png" alt="" /> Profile</NavLink>
        </div>
        <div className={gon.item}>
            <NavLink to='/dialogs' activeClassName={gon.activeLink}> <img src="images/chat.png" alt="" /> Messages</NavLink>
        </div>
        <div className={gon.item}>
            <NavLink to='/news' activeClassName={gon.activeLink}> <img src="images/newspaper.png" alt="" /> News</NavLink>
        </div>
        <div className={gon.item}>
            <NavLink to='/music' activeClassName={gon.activeLink}> <img src="images/music.png" alt="" /> Music</NavLink>
        </div>
        <div className={gon.item}>
            <NavLink to='/settings' activeClassName={gon.activeLink}> <img src="images/settings.png" alt="" /> Settings</NavLink>
        </div>
    </nav>
}

export default Second;
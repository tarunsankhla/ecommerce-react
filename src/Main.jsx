import React from 'react'
import {Outlet} from 'react-router'
import {Footer} from './components/Footer/Footer'
import {Navbar} from './components/Navbar/Navbar'
import { VAR_ENCODE_TOKEN, VAR_USER_ID } from './utils/Routes';

function Main() {
    console.log("Main");
    var token = localStorage.getItem(VAR_ENCODE_TOKEN);
    var userID = localStorage.getItem(VAR_USER_ID);
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main

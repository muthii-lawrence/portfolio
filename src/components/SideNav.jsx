import React from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import Main from "../components/Main";
import Track from "./Track";
import Nav from '../components/sidenavv';

const SideNav = () => {
    return (
        <div>
            <AiOutlineMenu />
            <Track />
            <Nav />
        </div>
    )
}

export default SideNav
import {Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar.js';

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;
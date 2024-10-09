import { Link, useNavigate } from "react-router-dom";
import style from './style.module.css'
import { useState } from "react";


function Navbar() {

    const [searchproduct, setsearchproduct] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
		localStorage.removeItem("token");
        navigate('/login');
	};

    return (
        <div class="row" >
            <nav class="navbar navbar-expand-lg sbg-gradient container-fluid" style={{backgroundColor: '#090808'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img class="img-fluid rounded float-end"
                            src="https://static.vecteezy.com/system/resources/previews/004/820/288/original/circular-swoosh-with-nature-leaf-and-women-yoga-free-vector.jpg"
                            width={"80px"} height={"70px"} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li class="nav-item" className={style.customIcon}>
                                <Link to="/mainpage" class="nav-link active">
                                    <div
                                        class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-house-door" style={{ color: "white" }}></i>
                                    </div>
                                    <div className={style.navComponent}>
                                        Main Page
                                    </div>
                                </Link>
                            </li> */}
    
                            <li class="nav-item" className={style.customIcon}>
                                <Link to="/allyoga" class="nav-link active">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-calendar2" style={{ color: "white" }}></i>
                                    </div>
                                    <div className={style.navComponent}>
                                        All Yoga
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item" className={style.customIcon}>
                                <Link to="/addyoga" class="nav-link active">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-calendar2" style={{ color: "white" }}></i>
                                    </div>
                                    <div className={style.navComponent}>
                                        Add Yoga
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item" className={style.customIcon}>
                                <Link to="/about" class="nav-link active">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-person-square" style={{ color: "white" }}></i>
                                    </div>
                                    <div className={style.navComponent}>
                                        About
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" style={{width:"380px"}} type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn bg-secondary">
                                search
                            </button>
                        </form>
                        {/* <button
                            class="btn btn-outline-info rounded-pill bg-white px-4 mx-3"
                            type="submit"
                            onClick={handleLogout}>
                            logout
                        </button> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;



// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import AddYogaPose from "../AddYogaPose/AddYogaPose";
// function Navbar(){
//     return(
//         <>
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                 <nav className="navbar navbar-expand-lg navbar-warning bg-light text-dark border border-warning">
//                 <div className="container-fluid">
//                 <span style={{color:"light",fontWeight:"bold"}}>Icon</span>
//                 {/* <a className="navbar-brand" href="#">YogaBest</a> */}
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="/mainpage">mainpage</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="/about">About</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="/addyoga" onClick={
//                         <AddYogaPose/>
//                     }>Add Yoga</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="/content">Contact</Link>
//                     </li>
//                 </ul>
//                 <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                     <button className="btn btn-outline-dark" type="submit">Search</button>
//                 </form>
//                 </div>
//             </div>
//             </nav>
//             </div>
//         </div> 
//         </div>
//         </>
//     )
// }
// export default Navbar;
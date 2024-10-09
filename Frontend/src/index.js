import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout.js';
import Yoga from './Components/Yoga/Yoga.js';
// import About from './Components/About/About.js';
// import Home from './Components/Home/Home.js';
import MainPage from './Components/mainpage.js';
// import router from '../../Backend/Routes/Yoga_pose.js';
import AddYogaPose from './Components/AddYogaPose/AddYogaPose.js';
import YogaDetails from './Components/Yoga/YogaDetail.js';
import EditYoga from './Components/AddYogaPose/EditYoga.js';
import About from './About.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/allyoga" element={<Yoga />} />
        <Route path="/addyoga" element={<AddYogaPose/>}/>
        <Route path="/yogadetails/:YogaId" element={<YogaDetails />} />
        <Route path="/deleteyoga/:YogaId" element={<YogaDetails />} />
        <Route path='/update/:YogaId' element={<EditYoga/>}/>
        <Route path='/about' element={<About/>}/>
    </Route>
  </Routes>
</BrowserRouter>
);


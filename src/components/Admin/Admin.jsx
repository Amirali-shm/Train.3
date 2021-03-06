import React, { useState, useRef,useEffect } from "react";
import TaskBox from "../Task/TaskBox";
import configureStore from "../../store/configureStore";
import axios from "axios";
import Header from "../Header/Header"
import Pin from "../Pin/Pin";
import TaskBuilder from "./TaskBuilder";
import PinBuilder from "./PinBuilder";
import ImageBox from "../ImageBox/ImageBox";
import { loadTasks } from "../../store/tasks";
const Admin = () => {
    const store = configureStore();

    useEffect(() => {
        store.dispatch(loadTasks());

    },[]);

 
return (

    <div dir="rtl">
        <div class="content">

            <Header />
            <TaskBox />
            <ImageBox />

            <div className="right groupbox">
                <TaskBuilder />
                <PinBuilder />
            </div>

            <div style={{ clear: 'both' }} ></div>

            <Pin />



        </div>
    </div >
);
}

export default Admin;
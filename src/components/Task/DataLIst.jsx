import React, { useState, useRef } from "react";
import configureStore from "../../store/configureStore";
import axios from "axios";
import Task from "./Task";

const store = configureStore();

const DataList = () => {
    return (
        <div>
            <form action="#" method="post">
                <img src="./images/formicn.png" alt="formicn" />
                <input list="category" name="titr" placeholder="موضوع" required />
                <datalist id="category">
                    <option value="برنامه نویسی" />
                    <option value="گرافیک" />
                    <option value="مدیریت مالی" />
                    <option value="مدیریت" />
                </datalist>
                <input type="text" list="userslist" name="username" placeholder="کاربر" required />
                <datalist id="userslist">
                    <option value=" احمد" />
                    <option value="امین" />
                </datalist>

                <input type="number" name="time" placeholder="زمان(روز)" required />

                <input type="submit" value="ثبت" />

            </form>
        </div>
    );
}

export default DataList;
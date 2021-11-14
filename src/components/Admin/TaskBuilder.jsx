import React, { useState, useRef } from "react";
import configureStore from "../../store/configureStore";
import axios from "axios";

const TaskBuilder = ( ) => {
    return (

        <div className="borderc">
            <h2>پست جدید</h2>
            <form action="#" method="post">
                <i className="fa fa-circle" style = {{ color: "#00af91" }} ariaHidden="true" ></i>
                <input type="text" name="tpost" placeholder="موضوع خود را بنویسید" required />
                <textarea name="cpost" cols="30" rows="10" placeholder="توضیحات" required></textarea>
                <img src="./images/formicn.png" alt="formicn" />
                <input type="text" name="titr" placeholder="موضوع" required />
                <input type="text" name="user" placeholder="کاربر" required />
                <input type="text" name="time" placeholder="زمان" required />
                <input type="submit" value="ثبت" />
            </form>
        </div>

    );
}

export default TaskBuilder;
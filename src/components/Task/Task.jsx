import React, { useState, useRef } from "react";
import configureStore from "../../store/configureStore";
import axios from "axios";

const store = configureStore();

const Task = ({ title, task, date }) => {

    return (
        <div className="alonerow">
            <div className="task">
                <i className="fa fa-circle circle" style={{ color: '#707070' }} ariaHidden="true"></i>
                <h3>{title}</h3>
                <i className="fa fa-times" style={{ background: '#ff2442' }} ariaHidden="true" ></i>
                <i className="fa fa-arrow-down" style={{ background: "#ffb830" }} ariaHidden="true"  ></i>
                <i className="fa fa-circle circle-topbtn" style={{ color: "#5c527f" }} ariaHidden="true"  ></i>
                <div className="task-down">
                    <p>
                        {task}
                    </p>
                    <span className="created" style={{ color: "#868686" }} >توسط <span style={{ color: "#ffb830" }} >امیرعلی</span></span>
                    <div className="edit">ویرایش</div>
                    <div className="date">
                        <span>
                           {date}
                        </span>
                    </div>
                </div>
            </div>
            <div className="time">
                {date}
            </div>
        </div>
    );
}

export default Task;
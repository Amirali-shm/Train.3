import React, { useState, useRef } from "react";
import configureStore from "../../store/configureStore";
import axios from "axios";
import Task from "./Task";
import DataList from "./DataLIst";
import { loadTasks } from "../../store/tasks";
import { data } from "jquery";


let taskList = [];
const getTasks = async () => {
    let res = await axios.get("http://localhost:8080/api/admin/tasks",
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    );
    taskList = res.data.tasks;
    console.log(taskList);
    return taskList;
};
getTasks();

const TaskBox = ({ boxTitle, boxClass }) => {
    
    return (
        <div>
            <div className={boxClass} >
                <h2> {boxTitle}</h2>

                {boxClass === "right alonebox" ? <DataList /> : console.log("")}
                {taskList.map(task => (
                    <Task title={task.title} task="sth" date={task.finishDate} />
                ))}

                <Task title="{drive} "task="{task.task}" date="{task.startDate} " />
            
            </div>


        </div>
    );
}

export default TaskBox;
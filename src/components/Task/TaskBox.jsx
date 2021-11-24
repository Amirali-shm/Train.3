import React, { useState, useRef } from "react";
import configureStore from "../../store/configureStore";
import axios from "axios";
import Task from "./Task";
import DataList from "./DataLIst";
import tasks, { loadTasks } from "../../store/tasks";
import { data } from "jquery";
import { loadUsers } from "../../store/users";
const store = configureStore();

//using async:
// const getTasks = async () => {
//     let res = await axios.get("http://localhost:8080/api/admin/tasks",
//         { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
//     );
//     taskList = res.data.tasks;
//     console.log(taskList);
//     return taskList;
// };
// getTasks();

let taskList = store.getState().entities.tasks.list;
console.log(taskList);
// // using simole axios :
// axios.get("http://localhost:8080/api/user/tasks",
//     { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
// ).then(responce => {
//     taskList = responce.data;
//     console.log("tasks are :" , taskList);
//     console.log(responce);
// }).catch(error => {
//     console.log(error)
// });

//using redux:
// store.dispatch(loadTasks());
// taskList = store.getState().entities.tasks.list;
// setTimeout(() => {console.log(store.getState().entities.tasks.list)},5000)



// const taskList = store.getState().entities.tasks.list;
// console.log(taskList);
const TaskBox = ({ boxTitle, boxClass }) => {

    return (
        <div>
            <div className={boxClass} >
                <h2> {boxTitle}</h2>

                {boxClass === "right alonebox" ? <DataList /> : console.log("")}
                {taskList && taskList.map(task => (
                    <Task title={task.title} task="sth" date={task.finishDate} />
                ))}



            </div>


        </div>
    );
}

export default TaskBox;
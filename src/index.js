import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { loadTasks, addTask, resolveTask, assignTaskToUser, showTasks } from "./store/tasks";
import App from "./containers/App";
import axios from "axios";
// import Cookie from 'cookie-universal';
// const cookies = Cookie()

render(<App/>, document.getElementById("root"));
const store = configureStore();

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// setTimeout(() => axios.post("http://localhost:8080/api/auth/register", {
//     name: "mahbod",
//     email: "mahbod@yahoo.com",
//     password: "12345678"
//     ,phoneNumber: "09367529393"

// }, { withCredentials: true }).then((response) => {
//     console.log(response);
// })
//     .catch((error) => {
//         console.log(error);
//     }),1000)

// var cookieRes = undefined

setTimeout(() => axios.post("http://localhost:8080/api/auth/login", {

    email: "mahbod@yahoo.com",
    password: "12345678"

}, { withCredentials: true }).then((response) => {
    console.log(response);
    // const cookieRes = cookies.getAll();
    // console.log(cookieRes)
})
    .catch((error) => {
        console.log(error);
    }), 1000)


// setTimeout(() => axios.post("http://localhost:8080/api", { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookieRes}` }, withCredentials: true }).then((response) => {
//     console.log(response);
//     const cookieRes = cookies.getAll();
//     console.log(cookieRes)
// })
//     .catch((error) => {
//         console.log(error);
//     }), 4000)

// async function test() {
//     await axios.post(
//         "http://localhost:8080/api",
//         {
//             headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookieRes}` },
//             withCredentials: true
//         })
//         .then((response) => {
//             console.log(response);
//             console.log("Here");
//             console.log(getCookie("cookie 1"))
//             return cookieRes
//         })
// }
// test();

setTimeout(() => axios.post("http://localhost:8080/api/admin/tasks", {
    title: "salam",
    task: "chetori",
    subjectTag: "برنامه نویسی",
    executors: ["amirali"],
    startDate: "14 November 2022",
    finishDate: "25 November 2022",

}, { headers: { 'Content-Type': 'application/json'}, withCredentials: true }).then((response) => {
    console.log(response);
}).catch((responce) => {
        console.log(responce.message);
    }), 6000)


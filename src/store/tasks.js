import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import { apiCallBegan } from "./api";
import axios from "axios";
import { get } from "jquery";

// <creat Slice Tasks 
const slice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {

        taskPlayed: (tasks, action) => {
            const index = tasks.list.findIndex(task => task.id === action.payload.id);
            tasks.list[index].done = true;
        },
        tasksRequested: (tasks, action) => {
            tasks.loading = true;
        },

        tasksReceived: (tasks, action) => {
            console.log("tasks recieved");
            tasks.list = action.payload.tasks;
            tasks.loading = false;
            tasks.lastFetch = Date.now();
            console.log();
        },

        tasksRequestFailed: (tasks, action) => {
            tasks.loading = false;
        },

        taskAdded: (tasks, action) => {
            tasks.list.push(
                action.payload
            ); 
            console.log("salamy");
        },
        taskResolved: (tasks, action) => {
            const index = tasks.list.findIndex(task => task.id === action.payload.id);
            tasks.list[index].resolved = true;
        },
        taskAssignedToUser: (tasks, action) => {
            const { id: taskId, userId } = action.payload;
            const index = tasks.list.findIndex(task => task.id === taskId);
            tasks.list[index].userId = userId;
        }

    }
});
// creat Slice Tasks>


// <export Slice 
const { taskPlayed, taskAdded, taskResolved, taskAssignedToUser, tasksReceived, tasksRequested, tasksRequestFailed , taskShown } = slice.actions;
export default slice.reducer;
// export Slice>

// funcrions

//loadtasks
const url = "/admin/tasks";
export const loadTasks = () => (dispatch, getState) => {
    console.log("came into loudTasks");
    const { lastFetch } = getState().entities.tasks;

    

    dispatch(apiCallBegan({
        url,
        method: "get",
        onStart: tasksRequested.type,
        onSuccess: tasksReceived.type,
        onerror: tasksRequestFailed.type

    })
    );
}

// export const listTasks = () => (dispatch, getState) => {

//     const { lastFetch } = getState().entities.tasks;
//     const { list } = getState().entities.tasks;
//     const diffInMoments = moment().diff(moment(lastFetch), "minutes");
//     if (diffInMoments < 10) return;

// }

// // api addtask
// export const addTask = task => apiCallBegan({
//     url,
//     method: 'post',
//     data: task,
//     onSuccess: taskAdded.type,
// })

export const resolveTask = id => apiCallBegan({
    url: url + "/done?task=" + id,
    method: 'patch',
    data: { done: true },
    onSuccess: taskResolved.type,
})
export const assignTaskToUser = (taskId, userId) => apiCallBegan({
    url: url + "/" + taskId,
    method: "patch",
    data: { userId },
    onSuccess: taskAssignedToUser.type,
})

export const showTasks = () => (dispatch, getState) => {

    const {list} = getState().entities.tasks;
    console.log(list);
}
    




export const getTasksByUser = userId => createSelector(
    state => state.entities.tasks,
    tasks => tasks.filter(task => task.userId === userId)

);

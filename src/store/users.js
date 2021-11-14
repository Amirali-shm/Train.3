import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./api";

let lastId = 0;
const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },

        usersReceived: (users, action) => {
            users.list = action.payload;
            users.loading = false;
            users.lastFetch = Date.now();
        },

        usersRequestFailed: (users, action) => {
            users.loading = false;
        },
        userAdded: (users, action) => {
            users.list.push(
                action.payload
            );
        },
        userRegistered: (users, action) => {
            console.log("userRegistered");
            const status = action.payload;
            
        },
        userLogined: (users, action) => {
            users.list.push(
                action.payload
            );
        },
        userDeleted: (users, action) => {
            return (
                users.list.filter(user => user.id !== action.payload.id)
            )
        },
        userPromoteToAdmin: (users, action) => {
            const index = users.list.findIndex(user => user.id === action.payload.id);
            users.list[index].admin = true;
        },

    }
});

export const { userAdded, userDeleted, userPromoteToAdmin, usersReceived, usersRequested, usersRequestFailed, userLogined, userRegistered } = slice.actions;
export default slice.reducer;

//loud user api


export const loadUsers = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.users;

    const diffInMoments = moment().diff(moment(lastFetch), "minutes");
    if (diffInMoments < 10) return;

    dispatch(apiCallBegan({
        url,
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onerror: usersRequestFailed.type
    })
    );
}

//add user api
export const addUSer = user => apiCallBegan({
    url: "/auth/register",
    method: 'post',
    data: user,
    onSuccess: userAdded.type,
})
//register user api
export const registerUser = user => apiCallBegan({
    url: "/auth/register",
    method: 'post',
    data: user,
    onSuccess: userRegistered.type,
})
//register user api
export const loginUser = user => apiCallBegan({
    url: "/auth/login",
    method: 'post',
    data: user,
    onSuccess: userLogined.type
})
// promoteToAdmin user api
export const promoteToAdminUser = user => apiCallBegan({
    url,
    method: 'patch',
    data: { admin: true },
    onSuccess: userPromoteToAdmin.type,
})

//delete user api
export const deleteUser = id => apiCallBegan({
    url: url + "/" + id,
    method: 'promote',
    onSuccess: userDeleted.type,
})

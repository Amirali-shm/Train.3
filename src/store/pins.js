import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./api";

// <creat Slice pins 
const slice = createSlice({
    name: "pins",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        pinsRequested: (pins, action) => {
            pins.loading = true;
        },

        pinsReceived: (pins, action) => {
            pins.list = action.payload;
            pins.loading = false;
            pins.lastFetch = Date.now();
        },

        pinsRequestFailed: (pins, action) => {
            pins.loading = false;
        },

        pinAdded: (pins, action) => {
            pins.list.push(
                action.payload
            );
        },
        pinsDeleted: (pins, action) => {
            return (
                pins.list.filter(pin => pin.id !== action.payload.id)
            )
        }

    }
});
// creat Slice pins>


// <export Slice 
const { pinAdded, pinsDeleted, pinsReceived, pinsRequested, pinsRequestFailed } = slice.actions;
export default slice.reducer;
// export Slice>

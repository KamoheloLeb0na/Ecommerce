import { createSlice } from "@reduxjs/toolkit";

const removeSlice = createSlice({
    name:"remove",
    initialState : {
        value : {
            remove : true
        }
    },
    reducers : {
        remove : (state , action) => {
            state.value = action.payload
        }
    }
})

export default removeSlice.reducer
export const {remove} = removeSlice.actions
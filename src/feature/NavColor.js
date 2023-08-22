import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice (
    {
        name :'nav',
        initialState:{
            value:{
                progress:0,
                buffer:10,
                remove:false
            }
        },
        reducers:{
            nav:(state,action)=>{
                state.value = action.payload
            }
        }
    }
)
export const {nav} = NavSlice.actions
export default NavSlice.reducer
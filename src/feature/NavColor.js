import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice (
    {
        name :'nav',
        initialState:{
            value:{
                home:"true",
                papers:"false",
                notifications:"false",
                profile:"false"
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
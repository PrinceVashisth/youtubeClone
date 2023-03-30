import { createSlice } from '@reduxjs/toolkit';

function UserName() {
  
  let value = JSON.parse(localStorage.getItem("User"));
  if(value){
    return JSON.parse(localStorage.getItem("User"));
  }
  return null; 
}

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo:UserName(),
    pending:false,
    error:false
  },
  reducers: {
   Initialstage:(state)=>{
     state.pending=true;
  },
   fulfilled:(state,action)=>{
     state.userInfo = action.payload;
     state.pending = false;
   },
   rejected:(state)=>{
    state.pending=false;
    state.error = true;
   }
  },
})

export const {Initialstage,fulfilled,rejected} = counterSlice.actions;
export default counterSlice.reducer
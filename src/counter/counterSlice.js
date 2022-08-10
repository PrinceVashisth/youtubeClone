import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo:null,
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



// _id:"62e67d46bbdc2b23d4638bc6",
// name:"prince",
// email:"prince@gmail.com",
// Password:"$2a$10$7zDT9jU4XIvCk0qJKP8LFuWi0l2nKFiMG.HKnvUbBqBY3vRd7x4mO",
// age:20,
// subscribed:Array,
// watchHistory:Array,
// SearchHistory:Array,
// LikesVideos:Array,
// comments:Array,
// ReportedVideos:Array,
// createdAt:"2022-07-31T13:01:58.213+00:00",
// updatedAt:"2022-08-01T07:17:49.487+00:00",
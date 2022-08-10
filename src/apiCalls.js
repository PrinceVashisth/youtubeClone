import axios from "axios";
import {Initialstage,fulfilled,rejected} from './counter/counterSlice';
export const LoginUser = async(credencials,dispatch)=>{
    dispatch(Initialstage());
    try {
        const user = await axios.post('/UserAuth/login',credencials);
        if(user.data === "Wrong Email")
        dispatch(rejected());
        else{
            dispatch(fulfilled(user.data)); 
        }   
    } catch {
        dispatch(rejected());
    }
                   
}
export const RegisterUser = async(credencials,dispatch)=>{
    dispatch(Initialstage());
    try{
         await axios.post('/UserAuth',credencials);
         dispatch(fulfilled());
    }catch{
        dispatch(rejected());
    }
                   
}
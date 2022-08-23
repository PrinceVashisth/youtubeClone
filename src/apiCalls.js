import axios from "axios";
import {Initialstage,fulfilled,rejected} from './counter/counterSlice';
export const LoginUser = async(credencials,dispatch)=>{
    dispatch(Initialstage());
    try {
        const user = await axios.post('/UserAuth/login',credencials);
        if(user.data !== "Wrong Email"){
            localStorage.setItem("User", JSON.stringify(user.data));
            dispatch(fulfilled(user.data)); 
        }
         else{
             dispatch(rejected);
             alert('Wrong Email');   
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
         alert("USer Sucessfully register..........");
    }catch{
        dispatch(rejected());
    }
                   
}
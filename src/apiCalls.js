import axios from "axios";
// https://youtube-api-7pfo.onrender.com/
import {Initialstage,fulfilled,rejected} from './counter/counterSlice';
export const LoginUser = async(credencials,dispatch)=>{
    dispatch(Initialstage());
    try {
        const user = await axios.post('/UserAuth/login',credencials);
        if(user.data !== "Wrong Email" && user.data !=="Wrong password"){
            localStorage.setItem("User", JSON.stringify(user.data));
            dispatch(fulfilled(user.data)); 
        }
         else{
             dispatch(rejected());
             alert('Wrong Email or password');
         }
    } catch {
        dispatch(rejected());
    }
                   
}
export const RegisterUser = async(credencials,dispatch)=>{
    dispatch(Initialstage());
    try{
         const res = await axios.post('/UserAuth/',credencials);
         if(res.data === 'Email Already Exist Use Another One' ){
           dispatch(rejected());
           alert(res.data);
         }else{
             dispatch(fulfilled());
             alert(res.data);
            }
        }catch{
            dispatch(rejected());
            alert('rejected');
    }
}
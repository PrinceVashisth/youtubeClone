import './login.css';
import { useState } from 'react';
import LoginComponent from '../../components/login/LoginComponent';
import Register from '../../components/register/Register';
import './login.css';

export default function Login() {

const [choice,setchoice] = useState(true);
const LoginSelect = ()=>{
setchoice(true);
}
const RegisterSelect=()=>{
setchoice(false);
}

    return (
    <div className='Login'>
    <div className="LoginWrapper">
          <div className="userForm">
          <div className="buttons">
          <button className={choice?"Active":"true"} onClick={LoginSelect} >Login</button>
          <button className={choice?"true":"Active"} onClick={RegisterSelect}>Register</button>
        </div>
           {choice?<LoginComponent/>:<Register/>}   
          </div>
      </div>
    </div>  
  )
}

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
          <div className="choiceBtn">
          <div className="buttons">
            <button className="loginForm" onClick={LoginSelect}>Login</button>
            <button className="loginRegisterForm" onClick={RegisterSelect}>Register</button>
          </div>
          </div>
          <div className="userForm">
           {choice?<LoginComponent/>:<Register/>}   
          </div>
      </div>
    </div>  
  )
}

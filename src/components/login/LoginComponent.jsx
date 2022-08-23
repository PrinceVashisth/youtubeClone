import './logincomponent.css';
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../apiCalls';

export default function LoginComponent() {
  let user = useSelector((state)=>state.user);
 
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user.userInfo));
  },[user.userInfo]);
  
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  
  const LoginHandeller=(e)=>{
   e.preventDefault();
   const userCredentials={
    email:email.current.value,
    password:password.current.value
   }
   LoginUser(userCredentials,dispatch);
  }

    return (
    <>
      <div className="LoginImg">
        <img src="assets/loginImg.jpg" alt="" className='sideImg'/>
      </div> 
      <form className='Loginform' onSubmit={LoginHandeller} >
        <input type="email" placeholder='Enter Your Email' ref={email} className="inputfield" required/>
        <input type="password" placeholder='Enter Your Password' ref={password} className="inputfield" required />
        <button type="submit" className='loginbtn' disabled={user.pending}>{user.pending? "Loading" : "Login" }</button>
      </form>
    </>
  )
}

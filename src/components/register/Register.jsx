import './register.css';
import { useRef } from 'react'
import { RegisterUser } from '../../apiCalls';
import {useDispatch, useSelector} from 'react-redux';
export default function Register() {
    const name = useRef('');
    const age = useRef(null);
    const email = useRef('');
    const password = useRef('');
    const confirmpassword = useRef('');
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    
    // Register Function
    const RegisterHandeller=(e)=>{
      e.preventDefault();
     if(confirmpassword.current.value === password.current.value){
       const UserCredencials={
         name:name.current.value,
         email:email.current.value,
         password:password.current.value,
         age:age.current.value
      }
       RegisterUser(UserCredencials,dispatch);
     }else{
      console.log("Password Are Not Matching");
     }
    }

  return (
    <>
     <div className="registerImg">
        <img src="assets/registerImg.png" alt="" className='sideImg'/>
      </div> 
        <form onSubmit={RegisterHandeller} className='register'>
            <input type="text" placeholder='Enter Your Name' ref={name} className='registerField' required/>
            <input type="email" placeholder='Enter Your Email' ref={email} className='registerField' required/>
            <input type="number" placeholder='Enter Your age' ref={age} className='registerField' required/>
            <input type="password" min={8} placeholder='Enter Your Password' ref={password} className='registerField' required/>
            <input type="password" placeholder='Enter Your Password Again' ref={confirmpassword} className='registerField' required/>
            <button type="submit" className='RegisterBtn'>{user.pending?"Loading":"Register" }</button>
        </form>
    </>
  )
}

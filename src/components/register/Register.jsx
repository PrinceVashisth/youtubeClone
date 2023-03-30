import './register.css';
import { useRef } from 'react'
import { RegisterUser } from '../../apiCalls';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import   axios  from 'axios';
// import Cloudinary from '../Cloudinary';
export default function Register() {
    const name = useRef('');
    const age = useRef(null);
    const email = useRef('');
    const password = useRef('');
    const confirmpassword = useRef('');
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [Image, SetImage] = useState("");
    // Register Function
    const RegisterHandeller=async(e)=>{
      e.preventDefault();
     if(confirmpassword.current.value === password.current.value){
       
      const data = new FormData();
      data.append("file",Image);
      data.append("upload_preset","YTClone");
      data.append("cloud_name","dnkd8ncit");

      const respo = await axios.post("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",data);
      
      console.log(respo.data.secure_url);
      const img = respo.data.secure_url;
       const UserCredencials={
         name:name.current.value,
         email:email.current.value,
         Password:password.current.value,
         age:age.current.value,
         profilePhoto:img
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
            <input type="file" onChange={(event)=>{SetImage(event.target.files[0])}}/>
            <button type="submit" className='RegisterBtn'>{user.pending?"Loading":"Register" }</button>
        </form>
    </>
  )
}

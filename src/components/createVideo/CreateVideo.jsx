import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import axios from 'axios';
import './CreateVideo.css';
import {ImCross} from 'react-icons/im';
export default function CreateVideo({id}) {

const [Thumbnail,setThumbnail] = useState("");
const [Video,setVideo] = useState("");

  {/* Toggler uses Here */}   
  const [Toggle,setToggle] = useState(false); 
 {/* use Ref Here */}   
 const title = useRef();
 const desc = useRef();
//  const thumbnail = useRef();
//  const video = useRef();
 
 {/* Video Creating Function Fire Here */}   
const createVideo = async(event)=>{ 
  event.preventDefault();   
  
  // bad code
  const data = new FormData();
  data.append("file",Thumbnail);
  data.append("upload_preset","YTClone");
  data.append("cloud_name","dnkd8ncit");   
  const respo = await axios.post("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",data);
  const thumbnail = respo.data.secure_url;
  console.log(thumbnail);

  const datavideo = new FormData();
  data.append("file",Video);
  data.append("upload_preset","YTClone");
  data.append("cloud_name","dnkd8ncit");   
  const respovid = await axios.post("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",data);
  const video = respo.data.secure_url;
  console.log(video);
// yha tak ka

  const Data = {
        title:title.current?.value,
        desc:desc.current?.value,
        thumbnail:thumbnail,
        video:video
       }
    const res = await axios.post(`/video/${id}`,Data);
    console.log(res.data);
}

  return (
    <div className='VideoCreate'>
        <div className="creatingBtn">
        <span>Create a New Video</span>
          <BsFillCameraVideoFill style={{color:"color"}} onClick={()=>{setToggle(true)}} />
        </div>
      <div className ={!Toggle?` VideoToggler &&  videoPopUp`:"videoPopUp"}>
         <ImCross style={{ color:'red' , marginLeft:'auto', marginTop:'10px' ,marginBottom:'10px' ,cursor:'pointer'}} onClick={()=>{setToggle(false)}} /> 
          <form action="" method="post" onSubmit={createVideo} >
                <input type="text" placeholder='Title Of Video' ref={title} required={true}/>
                <input type="text" placeholder='Description of Video' ref={desc} required={true}/>
                <span>Thumbnails</span> <input type="file" onClick={(e)=>{setThumbnail(e.target.files[0])}} required={true}/>
                <span>Video to Share</span> <input type="file" onClick={(e)=>{setVideo(e.target.files[0])}} required={true}/>
                <input type="submit" value="done" />
                </form>
        </div>
      </div>
  )
}
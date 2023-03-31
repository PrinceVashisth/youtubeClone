import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import axios from 'axios';
import './CreateVideo.css';
import {ImCross} from 'react-icons/im';
export default function CreateVideo({id}) {

const [Thumbnail,setThumbnail] = useState("");
const [video,setVideo] = useState("");
const [disabled,setDisabled] = useState(false);
  {/* Toggler uses Here */}   
  const [Toggle,setToggle] = useState(false); 
 {/* use Ref Here */}   
 const title = useRef();
 const desc = useRef();
 
 {/* Video Creating Function Fire Here */}   
const createVideo = async(event)=>{
  console.log('clicked.....');
  event.preventDefault();
  setDisabled(true);
  const data = new FormData();
  data.append("file",Thumbnail);
  data.append("upload_preset","YTClone");
  data.append("cloud_name","dnkd8ncit");
  const respo = await axios.post("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",data);
  const img = respo.data.secure_url;

  const formData = new FormData();
  formData.append('file', video);
  formData.append('upload_preset', 'YTClone');
  formData.append('resource_type', 'video');

  const videodata = await axios.post(`https://api.cloudinary.com/v1_1/dnkd8ncit/video/upload`,formData);
  const videoUrl =  videodata.data.secure_url;

  const Data = {
        title:title.current?.value,
        desc:desc.current?.value,
        thumbnail:img,
        video:videoUrl
       }
  await axios.post(`/videos/${id}`,Data);  
    setDisabled(false);
}

  return (
    <div className='VideoCreate'>
        <div className="creatingBtn">
        <span>Create a New Video</span>
          <BsFillCameraVideoFill style={{color:"color"}} onClick={()=>{setToggle(true)}} />
        </div>
      <div className ={!Toggle?` VideoToggler videoPopUp`:"videoPopUp"}>

         <ImCross style={{ color:'red' , marginLeft:'auto', marginTop:'10px' ,marginBottom:'10px' ,cursor:'pointer'}} onClick={()=>{setToggle(false)}} /> 
          <form action="" method="post" onSubmit={createVideo} >
                <input type="text" placeholder='Title Of Video' ref={title} required={true}/>
                <input type="text" placeholder='Description of Video' ref={desc} required={true}/>
                <span>Thumbnails</span> <input type="file" onChange={(event)=>{setThumbnail(event.target.files[0])}} required={true}/>
                 <span>Video to Share</span><input type="file" onChange={(event)=>{setVideo(event.target.files[0])}} required={true}/>
                <input type="submit" value={disabled?"submitting":"submit"} id='submitbtn' disabled={disabled} className={disabled?"":"disabled" }/>
                </form>
                </div>
                </div>
                )
              }
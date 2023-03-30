import { useState } from "react";

export default function Cloudinary({Image}) {
const [UrlImage, setUrlImage] = useState(''); 
    
    const data = new FormData();
    data.append("file",Image);
    data.append("upload_preset","YTClone");
    data.append("cloud_name","dnkd8ncit");
    fetch("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",{
      method:"post",
      body:data
    }).then((res)=>{
       res.json()
       .then((data)=>{
         console.log(data.secure_url);
         setUrlImage(data.secure_url);
       }).catch((err)=>{
        console.log(err);
       })
    })
      
  return (UrlImage);
}

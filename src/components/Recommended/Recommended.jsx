import './recommended.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import RecommendedVideo from '../recommendedVideo/RecommendedVideo';

export default function Recommended({cid}) {
  const id = useParams().id;
   const [Videos,setVideos] = useState([]);
useEffect(()=>{
  const fetchchannel = async()=>{
     const res =  await axios.get(` videos/video/recommended/${cid}`);
    setVideos(res.data.flat());
   }
   fetchchannel();
},[cid,id]);
  return (
   <>
    <div className="recommendedContainer">
        <div className="recommendedVideos">
        {
           Videos.map((V)=>(
         <Link to={`/video/${V._id}`} style={{textDecoration:'none',color:'black'}}>
            <RecommendedVideo
              key={V._id}
              video={V}
            />
          </Link>  
           ))
        }
        </div>
    </div>
   </>
  )
}

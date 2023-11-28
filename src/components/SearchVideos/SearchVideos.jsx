import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './searchVideos.css';

export default function SearchVideos({Video}) {
const user = useSelector((state)=>state.user.userInfo);
  const viewHandeller=async()=>{
 const res = user?await axios.put(` user/video/${Video._id}`,{userId:user._id}):await axios.put(` user/video/${Video._id}`,{userId:user});

}

  return (
    <>
     <li className="SearchItem" onClick={viewHandeller}>
        <Link to={`/video/${Video._id}`} style={{textDecoration:'none'}}> {Video.title} </Link>   
     </li>
    </>
  )
}

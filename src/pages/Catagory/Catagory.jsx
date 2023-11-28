import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Video from '../../components/Video/Video';
import './catogory.css';

export default function Catagory() {
const Catagory = useParams().catagory;
    const [Catagoryies,setCatagoryies] = useState([]);
    const [skeleton,SetSkeleton] = useState(true);
useEffect(()=>{
  const fetchMovies = async()=>{
  const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/videos/video/selectedCatagory/${Catagory}`);
  setCatagoryies(res.data.flat());
  SetSkeleton(false);
  }
  fetchMovies();
},[Catagory]);

    return (
    <>
      <Navbar/>
        <div className="mainContent">
          <Sidebar/>
          <div className="MoviesContainer">
          { skeleton ?<LoadingScreen key={1}/>:Catagoryies.map((cat)=>(<Video key={cat._id} props={cat} />)) }
          </div>
        </div>
    </>
  )
}

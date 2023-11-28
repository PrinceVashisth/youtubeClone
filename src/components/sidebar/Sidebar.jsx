import './sidebar.css';
import { AiFillHome,AiOutlineLike,AiOutlineDown, AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineExplore,MdSubscriptions ,MdVideoLibrary,MdOutlineLocalMovies, MdOutlineLiveTv, MdScience, MdSports} from 'react-icons/md';

import {CgGames, CgMusic} from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { VscReport } from 'react-icons/vsc';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import Subscribers from '../subscribers/Subscribers';

import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect,useState } from 'react';

export default function Sidebar() {
  const [toggle, setToggle] = useState(false); 
  const toggleing =()=>{
    setToggle(!toggle);
  } 
  console.log(toggle+"Clicked");
let user = JSON.parse(localStorage.getItem('User'));
useEffect(()=>{
  user = JSON.parse(localStorage.getItem('User')); 
},[user,toggle]); 

const UserPresent = ()=>{
  return(
    <React.Fragment>
        <ul className={toggle?"minExploreList":"ExploreList"}>
      <Link to={`/subscriberVideo`} style={{textDecoration:'none' , color:'black'}}>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <MdVideoLibrary className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Library</span>
        </li>
      </Link>   
      <Link to={'/history'} style={{ textDecoration:'none',color:'black'}}>  
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <AiOutlineHistory className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>History</span>
        </li>
      </Link>  
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <CgMusic className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Your Video</span>
        </li>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <CgMusic className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Watch Later</span>
        </li>
  <Link to={'/like'}  style={{textDecoration:"none",color:"black"}}>    
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <AiOutlineLike className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Liked Videos</span>
        </li>
  </Link>    
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <AiOutlineDown className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Show More</span>
        </li>
      </ul>

        <hr className='Seperator'/>
      <div className="subscription__List">
      <div className="headingSubscription">{toggle?"":"Subscription"}</div>
        <ul className={toggle?"minlistSubscription":"listSubscription"}>
       {user.subscribed.map((s)=>(
        <Subscribers 
          key={s}
          users ={s}
          toggle={toggle}
        />
       )) }
        </ul>
      </div>

      <hr className='Seperator'/>
       <div className={toggle?"minExploreList":"Explore"}>
       <span className='ExploreHeading'>{toggle?"":"Explore"}</span>
          <ul className='ExploringList'>
  <Link to={'/Explore/Movies'} style={{textDecoration:'none',color:'black'}}>
          <li className={toggle?"minexploreListItem":"ExploreListItem"}>
           <MdOutlineLocalMovies className={toggle?"minIcon":'Icon'}/>
           <span className={toggle?"minName":"exploreIconName"}>Movies</span>
          </li>
  </Link> 
  <Link to={'/Explore/Gaming'} style={{textDecoration:'none',color:'black'}}>
          <li className={toggle?"minexploreListItem":"ExploreListItem"}>
           <CgGames className={toggle?"minIcon":'Icon'}/>
           <span className={toggle?"minName":"exploreIconName"}>Gaming</span>
          </li>
  </Link>
  <Link to={'/Explore/Live'} style={{textDecoration:'none',color:'black'}}>
          <li className={toggle?"minexploreListItem":"ExploreListItem"}>
           <MdOutlineLiveTv className={toggle?"minIcon":'Icon'}/>
           <span className={toggle?"minName":"exploreIconName"}>Live</span>
          </li>
  </Link>        
  <Link to={'/Explore/Education'} style={{textDecoration:'none',color:'black'}}>        
          <li className={toggle?"minexploreListItem":"ExploreListItem"}>
           <MdScience className={toggle?"minIcon":'Icon'}/>
           <span className={toggle?"minName":"exploreIconName"}>Learn</span>
          </li>
  </Link>        
  <Link to={'/Explore/Sports'} style={{textDecoration:'none',color:'black'}}>
          <li className={toggle?"minexploreListItem":"ExploreListItem"}>
           <MdSports className={toggle?"minIcon":'Icon'}/>
           <span className={toggle?"minName":"exploreIconName"}>Sports</span>
          </li>
  </Link>
       </ul>
      </div> 
      <hr className='Seperator'/>
     <div className="otherUserList">
      <ul className={toggle?"minExploreList":"userInformation"}>
        <li className="userInfo">
          <FiSettings className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"SubjectName"}>Settings</span>
        </li>
    <Link to={'/Reports'} style={{textDecoration:'none',color:'black'}}>    
        <li className="userInfo">
          <VscReport className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"SubjectName"}>Reports</span>
        </li>
    </Link>   
        <li className="userInfo">
          <IoMdHelpCircleOutline className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"SubjectName"}>Help</span>
        </li>
      </ul>
     </div>
    </React.Fragment>
  )
}
const UserAbsent = ()=>{
  return(
    <React.Fragment>
     <div style={{width:"100%",display:"flex",justifyContent:'center',marginTop:"20px"}}>
    <Link to={'/Login'}>
     <button style={{fontSize:'15px',padding:"7px 10px",fontWeight:"600",color:"white",backgroundColor:"red",borderRadius:"5px",border:"none",cursor:"pointer"}}>Sign in</button>
    </Link> 
     </div>
    </React.Fragment>
  )
}
  return (
    <div className={toggle?"sidebar minSideBar":"sidebar"}>
     <div className="toggleIcon" onClick={toggleing}></div>
      <div className="sidebarWrapper">
      <ul className={toggle?"minExploreList":"ExploreList"}>
      <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <AiFillHome className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Home</span>
        </li>
      </Link>
      <Link to={'/Explore'}  style={{textDecoration:'none',color:'black'}}>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <MdOutlineExplore className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Explore</span>
        </li>
      </Link>
      <Link to={'/Shorts'}  style={{textDecoration:'none',color:'black'}}>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <CgMusic className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Shorts</span>
        </li>
        </Link>
      <Link to={'/Subscription'}  style={{textDecoration:'none',color:'black'}}>
        <li className={toggle?"minexploreListItem":"ExploreListItem"}>
          <MdSubscriptions className={toggle?"minIcon":'Icon'}/>
          <span className={toggle?"minName":"exploreIconName"}>Subscription</span>
        </li>
        </Link>
        </ul>
        <hr className='Seperator'/>
      {user?<UserPresent/>:<UserAbsent/>}
      </div>
    </div>  
  )
}

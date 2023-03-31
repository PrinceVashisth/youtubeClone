import './navbar.css';
import { ImYoutube2 } from 'react-icons/im';
import { CgSearch } from 'react-icons/cg';
import { MdCreate, MdNotificationsActive } from 'react-icons/md';
import { VscFeedback, VscThreeBars } from 'react-icons/vsc';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SearchVideos from '../SearchVideos/SearchVideos';


export default function Navbar() {

const user = useSelector((state)=>state.user.userInfo);
const [SearchItem,SetSearchedItem]  = useState("");
const [Videos,SetVideos] = useState([]);
const [toggle,setToggle] = useState(false);
const inputField=(e)=>{SetSearchedItem(e.target.value);}

const actionPerform =()=>{
   setToggle(!toggle);    
} 
useEffect(()=>{
  const fetchVideos = async()=>{
    if(SearchItem !== ""){
      const res = await axios.get(`/user/search/${SearchItem}`);
      SetVideos(res.data);
    }else{
      SetVideos([]);
    }
  }
  fetchVideos();
},[SearchItem,toggle]);
const UserPresent = ()=>{
const logoutHandeller=()=>{
  localStorage.setItem("User",null);
  window.location.reload();
}

  return(
  <>
  <div className="navIcons">
              <div className="navitem">
              <VscFeedback className="icon" />
              </div>
              <div className="navitem">
                 <MdCreate className='icon'/>
              </div>
              
              <div className="navitem">
                 <MdNotificationsActive className='icon'/>
              </div>
  </div>
            <Link to={`/profile/${user.name}`} style={{textDecoration:'none'}}>
            <div className="activeUser">
              <img src ={`${user.profilePhoto}`} alt="" className="userProfile" />
            </div>
            </Link>
            <span style={{"marginLeft":"10px","color":"#ce0000","fontWeight":"700","cursor":"pointer"}} onClick={logoutHandeller}>LogOut</span>

  </>)          
}
const UserAbsentRightBar =()=>{
  return(
  <>
      <div className="absentUserNavbar" style={{marginLeft:'auto'}}>
        <Link to={'/Login'} style={{textDecoration:"none",color:"white"}}>
      <button className='LoginButton'> Sign In</button>
        </Link>
      
      </div> 
  </>
  )
}
  return (
    <div className='navbar'>
        <div className="navbarWrapper">
          <div className="navbarLeft">
           <VscThreeBars  rotate={90} className="ToggleIcon" size={25} onClick={actionPerform} />
              <ImYoutube2 className='logoImg'/>
          </div>
          <div className="navbarCenter">
              <div className="SearchBar">
              <input type="text" className="Searchbar" placeholder='Search A Video Here' onChange={inputField} value={SearchItem} />
              <CgSearch  />
              </div>
{
  Videos!==[]?
              <div className="searchedItemList">
                <ul className="SearchList">
                   { Videos.map((V)=>(<SearchVideos key={V._id} Video={V} />))  }
                </ul>
              </div>
  :null
}
          </div>
          <div className="navbarRight">
          { user?<UserPresent/>:<UserAbsentRightBar/>}
          </div>
        </div>
    </div>
  )
}

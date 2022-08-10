import { useEffect } from 'react';
import { useState } from 'react';
import HomeprofileSection from '../HomeProfileSection/HomeprofileSection';
import ProfileAboutSection from '../ProfileAboutSection/ProfileAboutSection';
import ProfileChannelSection from '../ProfileChannelSection/ProfileChannelSection';
import ProfileVideoSection from '../profileVideoSection/ProfileVideoSection';
import './bottomProfile.css';

export default function BottomProfile({props}) {
 const [value,SetValue] = useState(props);
 useEffect(()=>{
   SetValue(props);
 },[props]);

 return (
    <>
    {   value === "Home"?<HomeprofileSection/>:value === "Channels"?<ProfileChannelSection/>:value === "About"?<ProfileAboutSection/>:<ProfileVideoSection/>   }
    </>
  )
}

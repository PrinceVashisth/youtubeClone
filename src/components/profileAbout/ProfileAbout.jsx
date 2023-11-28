import './ProfileAbout.css';
import { format } from 'timeago.js';
export default function ProfileAbout({channel , Views}) {

  return (
    <div className='ProfileAbout'>
        <div className="ProfileAboutContainer">
            <span className="Channeldesc"> Description </span>
            <div className="DescriptionChannel">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque corrupti distinctio, vero itaque nam accusantium eius quos! Tempore, similique enim.</div>
        </div>
        <div className="ProfileAboutStats">
        <div className="stats">Stats:</div>
            <div className="createdAtChannel">Joined {format(channel.createdAt)}</div>
            <div className="ChannelViews">{Views.length} Views</div>
        </div>
    </div>
  )
}

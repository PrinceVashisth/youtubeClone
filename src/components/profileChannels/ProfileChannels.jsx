import './profileChannels.css';

export default function ProfileChannels({channel}) {
    const PF ='http://localhost:3000/assets/';
  return (
    <div className='ProfileChannel'>
       <div className="ProfileChannelImg">
        <img src={`${PF}${channel.channelImg}`} alt="" />
       </div>
       <div className="ProfilechannelName">{channel.channelName}</div>
       <div className="ProfilechannelSubscribers">{channel.subscribers.length} Subscribers</div>
       <button className="ProfileChannelSubscribers">SUBSCRIBE</button>
    </div>
  )
}

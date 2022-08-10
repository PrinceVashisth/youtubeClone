import './channelSkeleton.css';

export default function ChannelSkeleton() {
    const COUNTER = 5;
  const SingleChannel = ()=>{
    return(
      <>
        <div className='ChannelSkeleton'>
        <div className="channelLogoSkeleton"></div>
        <div className="channelNAmeSkeleton"></div>
        <div className="subsSkeleton"></div>
        <div className="subsBtnSkeleton"></div>
    </div>
      </>
    )
  }
        return (Array(COUNTER).fill(<SingleChannel/>));
}

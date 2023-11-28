import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { useSelector } from "react-redux";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Video from "../Video/Video";
import "./historyVideo.css";

export default function HistoryVideos() {
  const [Skeleton, setSkeleton] = useState(true);
  const user = useSelector((state) => state.user.userInfo);
  const [video, SetVideo] = useState();
  const [refresh, SetRefresh] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/history/${user._id}`);
      SetVideo(res.data);
      console.log(res.data);
      setSkeleton(false);
    };
    fetchVideos();
  }, [user, refresh]);
  const DeleteHandeller = async () => {
    await axios.put(`/user/video/remove/removeAll`, { userId: user._id });
    SetRefresh(!refresh);
  };
  return (
    <>
      <div className="HistoryContainer">
        <div className="DeleteAllVideoHistory" onClick={DeleteHandeller}>
          {Skeleton ? null : (
            <>
              Delete ALL Videos
              <FiDelete size={30} />
            </>
          )}
        </div>
        <div className="historyVideos">
          {Skeleton ? (
            <LoadingScreen key={1} />
          ) : (
            video.map((v) => (
              <div style={{ minWidth:'300px'}}>
                <Video key={v._id} props={v} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

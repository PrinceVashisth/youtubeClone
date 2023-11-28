import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import axios from "axios";
import "./CreateVideo.css";
import { ImCross } from "react-icons/im";
export default function CreateVideo({ id }) {
  const [Thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const title = useRef();
  const desc = useRef();
  const thumbnail = useRef(null);
  const Video = useRef(null);
   
  const createVideo = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const data = new FormData();
    data.append("file", Thumbnail);
    data.append("upload_preset", "YTClone");
    data.append("cloud_name", "dnkd8ncit");
    const respo = await axios.post(
      "https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",
      data
    );
    const img = respo.data.secure_url;

    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "YTClone");
    formData.append("resource_type", "video");

    const videodata = await axios.post(
      `https://api.cloudinary.com/v1_1/dnkd8ncit/video/upload`,
      formData
    );
    const videoUrl = videodata.data.secure_url;

    const Data = {
      title: title.current?.value,
      desc: desc.current?.value,
      thumbnail: img,
      video: videoUrl,
    };
    await axios.post(`https://yt-clone-vciw.onrender.com/api/videos/${id}`, Data);
    setDisabled(false);
  };

  return (
    <div className="VideoCreate">
      <div className="creatingBtn"
      onClick={() => {
        setToggle(true);
      }}
      >
        <span>Create a New Video</span>
        <BsFillCameraVideoFill
          style={{ color: "color" }}
          className="videoIcon"
        />
      </div>
      <div className={Toggle ?"videoPopUpWrapper":"VideoToggler"}>
        <div className="videoPopUp">
          <ImCross
            style={{
              color: "red",
              marginLeft: "auto",
              marginTop: "10px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setToggle(false);
            }}
          />
          <form action="" method="post" onSubmit={createVideo}>
            <input
              type="text"
              placeholder="Title Of Video"
              ref={title}
              required={true}
            />
            <input
              type="text"
              placeholder="Description of Video"
              ref={desc}
              required={true}
            />
            <div className="UploadBtn" onClick={()=>{thumbnail.current.click()}} >Upload Thumbnail</div>
            <input
              type="file"
              onChange={(event) => {
                setThumbnail(event.target.files[0]);
              }}
              required={true}
              ref={thumbnail} 
              hidden
            />
            <div className="UploadBtn"  onClick={()=>{Video.current.click()}}>Upload Video</div>
            <input
              type="file"
              onChange={(event) => {
                setVideo(event.target.files[0]);
              }}
              required={true}
              ref={Video}
              hidden
            />
            <input
              type="submit"
              value={disabled ? "submitting" : "submit"}
              id="submitbtn"
              disabled={disabled}
              className="disabled"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
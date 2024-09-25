import "../../styles/components/home/video.scss";
import bgVideo from "../../assets/video.mp4";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
      setButtonVisibility(false);
    } else {
      videoRef.current.pause();
      setButtonVisibility(true);
    }
  }, [isPlaying]);
  return (
    <section
      className="videoSection"
      onMouseOver={() => setButtonVisibility(true)}
      onMouseLeave={() => setButtonVisibility(false)}
    >
      <div className="playerContainer">
        {buttonVisibility && (
          <div className="bigCircle" onClick={() => setIsPlaying(!isPlaying)}>
            <i className={isPlaying ? "fi-rr-pause" : "fi-rr-play"}></i>
          </div>
        )}
        <video ref={videoRef} autoPlay muted loop className="video-background">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;

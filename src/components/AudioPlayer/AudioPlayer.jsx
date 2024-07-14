// src/AudioPlayer.js
import React, { useEffect, useRef } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
        height: "0",
        width: "0",
        videoId: videoId,
        playerVars: {
          autoplay: 0, // Disable autoplay
        },
      });
    };

    // const onPlayerReady = (event) => {
    //   event.target.playVideo();
    // };

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div id={`youtube-player-${videoId}`} className="youtube-player"></div>
  );
};

export default AudioPlayer;

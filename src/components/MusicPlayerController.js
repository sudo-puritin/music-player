/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicPlayerController = () => {
  const {
    currentTrackName,
    currentTrackCover,
    currentTrackArtist,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    togglePlay,
  } = useMusicPlayer();

  return (
    <>
      <div className="background">
        <img src={currentTrackCover} />
      </div>

      <div className="container">
        <div className="player-img">
          <img id="cover" className="active" src={currentTrackCover} />
        </div>

        <h2 id="music-title">{currentTrackName}</h2>
        <h3 id="music-artist">{currentTrackArtist}</h3>

        <div className="player-controls">
          <FontAwesomeIcon
            icon="fa-solid fa-backward-step"
            title="Previous"
            onClick={playPreviousTrack}
          />

          {isPlaying ? (
            <FontAwesomeIcon
              icon="fa-solid fa-pause"
              className="pause-button"
              title="Pause"
              onClick={togglePlay}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-play"
              className="play-button"
              title="Play"
              onClick={togglePlay}
            />
          )}

          <FontAwesomeIcon
            icon="fa-solid fa-forward-step"
            title="Next"
            onClick={playNextTrack}
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayerController;

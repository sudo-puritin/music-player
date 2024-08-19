import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TrackList() {
  const { trackList, currentTrackName, playTrack } = useMusicPlayer();

  return (
    <div className="trackList">
      <div className="header">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-list" />
          <span>Music List</span>
        </div>
      </div>
      <ul>
        {trackList.map((track, index) => (
          <li
            onClick={() => playTrack(index)}
            key={track.id}
            className={`${
              currentTrackName === track.name ? "trackPlaying" : ""
            }`}
          >
            <div className="row">
              <div>
                <span>{index + 1}. </span>
                <span>{track.name}</span>
              </div>
              <p>{track.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;

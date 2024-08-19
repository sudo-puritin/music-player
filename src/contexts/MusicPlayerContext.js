import React, { useState } from "react";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      path: "assets/1.mp3",
      name: "Elegance Song",
      cover: "assets/1.jpg",
      artist: "LOFIUM",
    },
    {
      path: "assets/2.mp3",
      name: "Rainy Day",
      cover: "assets/2.jpg",
      artist: "Spectre",
    },
    {
      path: "assets/3.mp3",
      name: "Orchestra? Lofi",
      cover: "assets/3.jpg",
      artist: "IDK",
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);

  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };

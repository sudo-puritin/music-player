import React from "react";
import "./App.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import MusicPlayerController from "./components/MusicPlayerController";
import TrackList from "./components/TrackList";

function App() {
  return (
    <>
      <MusicPlayerProvider>
        <MusicPlayerController />
        <TrackList />
      </MusicPlayerProvider>
    </>
  );
}

export default App;

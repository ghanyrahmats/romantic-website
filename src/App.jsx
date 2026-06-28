import "./App.css";

import { useState } from "react";

import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import FinalQuestion from "./components/FinalQuestion";
import Envelope from "./components/Envelope";

import StarField from "./components/StarField";
import ShootingStars from "./components/ShootingStars";
import Moon from "./components/Moon";
import FloatingHearts from "./components/FloatingHearts";
import FallingPetals from "./components/FallingPetals";

import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [stage, setStage] = useState("home");
  const [showLetter, setShowLetter] = useState(false);
  const [letterMessage, setLetterMessage] = useState("");

  return (
    <div className="App">

      {/* Background */}
      <StarField />
      <Moon />
      <ShootingStars />
      <FloatingHearts />
      <FallingPetals />

      {stage === "home" && <Hero onStart={() => setStage("story")} />}

      {stage === "story" && (
        <section className="storyStage">
          {!showLetter && (
            <div className="envelopeOverlay">
              <Envelope onOpen={() => setShowLetter(true)} />
            </div>
          )}

          {showLetter && (
            <>
              <LoveLetter message={letterMessage} onNext={() => setStage("gallery")} />
              <div className="message-input-card">
                <label htmlFor="letter-message">Balas pesan di sini</label>
                <textarea
                  id="letter-message"
                  value={letterMessage}
                  onChange={(event) => setLetterMessage(event.target.value)}
                  placeholder="Ketik balasanmu..."
                />
              </div>
            </>
          )}
        </section>
      )}

      {stage === "gallery" && (
        <>
          <Gallery />
          <FinalQuestion />
        </>
      )}

      {/* Music Player */}
      <MusicPlayer />
      

    </div>
  );
}

export default App;
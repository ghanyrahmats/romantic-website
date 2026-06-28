import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import loveMusic from "../assets/audio/you!.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
      } else {
        await audio.play();
      }
    } catch (error) {
      console.error("Gagal memutar musik:", error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={loveMusic}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-pink-500
          hover:bg-pink-600
          hover:scale-110
          active:scale-95
          transition-all
          duration-300
          shadow-2xl
          flex
          items-center
          justify-center
        "
      >
        {playing ? (
          <Pause className="text-white" size={28} />
        ) : (
          <Play className="text-white ml-1" size={28} />
        )}
      </button>

      {playing && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-50
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            text-pink-200
            animate-pulse
          "
        >
          <Music2 size={18} />
          <span className="text-sm font-medium">
            Now Playing ♪
          </span>
        </div>
      )}
    </>
  );
}
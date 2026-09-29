"use client";

import { useEffect, useRef } from "react";
import { songs } from "@/lib/content";

export default function Songs() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startAudio = () => {
      void audio.play().catch(() => {
        // Browsers may block autoplay until the visitor interacts with the page.
      });
    };

    startAudio();
    window.addEventListener("pointerdown", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      aria-hidden="true"
      autoPlay
      loop
      preload="auto"
      src={songs[0].file}
      className="hidden"
    />
  );
}

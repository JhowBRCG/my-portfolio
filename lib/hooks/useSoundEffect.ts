import { useEffect, useState } from "react";

export function useSoundEffect(audioFilePath: string) {
  const [soundEffect, setSoundEffect] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio(audioFilePath);
      audio.load();
      setSoundEffect(audio);
    }
  }, [audioFilePath]);

  const playSound = () => {
    if (soundEffect) {
      soundEffect.currentTime = 0;
      soundEffect.play();
    }
  };

  return playSound;
}

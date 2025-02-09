import { useState, useRef } from "react";
import { Video } from "expo-av";

const useVideoPlayer = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: Video | null }>({});

  const registerVideoRef = (id: string, ref: Video | null) => {
    videoRefs.current[id] = ref;
  };

  const playVideo = async (id: string) => {
    if (currentVideoId && currentVideoId !== id) {
      // Pause the previously playing video
      await videoRefs.current[currentVideoId]?.pauseAsync();
    }
    setCurrentVideoId(id);
    await videoRefs.current[id]?.playAsync();
  };

  const pauseVideo = async (id: string) => {
    if (currentVideoId === id) {
      await videoRefs.current[id]?.pauseAsync();
      setCurrentVideoId(null);
    }
  };

  const unloadVideo = async (id: string) => {
    if (videoRefs.current[id]) {
      await videoRefs.current[id]?.stopAsync();
      await videoRefs.current[id]?.unloadAsync();
      videoRefs.current[id] = null;
    }
  };



  return {
    currentVideoId,
    registerVideoRef,
    playVideo,
    pauseVideo,
    unloadVideo,
  };
};

export default useVideoPlayer;

import { collection, getDocs, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FIREBASE_DB } from "../../../firebase-config";


export type VideoItem = {
  id: string;
  reelUrl: string;
};

type VideoData = {
  videos: VideoItem[];
};

export const useGetAllVideos = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  const fetchAllVideos = async (): Promise<VideoData[]> => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "AllVideos"));
      const categories = querySnapshot.docs.map(
        (doc) => doc.data() as VideoData
      );
      return categories;
    } catch (error) {
      console.error("Error fetching all videos:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllVideos();
      setVideos(data);
    };

    loadData();
  }, []);

  return { videos };
};

import { collection, getDocs, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FIREBASE_DB } from "../../../firebase-config";

interface MovieCategory {
  title: string;
  categoryId: string;
  movieData: string[];
}
export const useGetAllMoviesCategory = () => {
  const [categories, setCategories] = useState<MovieCategory[]>([]);

  const fetchMovieCategories = async (): Promise<MovieCategory[]> => {
    try {
      const querySnapshot = await getDocs(
        collection(FIREBASE_DB, "AllMoviesCategory")
      );
      const categories = querySnapshot.docs.map(
        (doc) => doc.data() as MovieCategory
      );
      return categories;
    } catch (error) {
      console.error("Error fetching movie categories:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMovieCategories();
      setCategories(data);
    };

    loadData();
  }, []);

  return { categories };
};

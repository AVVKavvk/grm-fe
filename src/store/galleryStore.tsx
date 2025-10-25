import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosClient } from "@/utils/axiosClient";
import { GalleryGetSchema } from "@/schema/gallerySchema";

interface GalleryStore {
  allImages: GalleryGetSchema[] | null;
  allImagesByYear: GalleryGetSchema[] | null;
  getAllImages: () => Promise<GalleryGetSchema[]>;
  getAllImagesByYear: (year: string) => Promise<GalleryGetSchema[]>;
}

export const useGalleryStore = create<GalleryStore>((set, get) => ({
  allImages: null,
  allImagesByYear: null,
  getAllImages: async () => {
    try {
      const url = `/api/v1/file/all`;
      const response = await axiosClient.get(url);
      if (response.status >= 200 && response.status < 300) {
        set({ allImages: response.data });
        // console.log(response.data);

        return response.data;
      } else {
        toast.error("Error fetching images");
        return null;
      }
    } catch (error) {
      toast.error("Error fetching images");
    }
  },
  getAllImagesByYear: async (year) => {
    try {
      const url = `/api/v1/file/year/${year}`;
      const response = await axiosClient.get(url);
      if (response.status >= 200 && response.status < 300) {
        set({ allImagesByYear: response.data });
        // console.log(response.data);
        return response.data;
      } else {
        toast.error("Error fetching images");
        return null;
      }
    } catch (error) {
      toast.error("Error fetching images");
    }
  },
}));

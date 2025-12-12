import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosClient } from "@/utils/axiosClient";
import { FeedbackFormData } from "@/schema/feedbackSchema";

interface FeedbackStore {
  sendFeedback: (data: FeedbackFormData) => Promise<boolean | null>;
}

export const useFeedbackStore = create<FeedbackStore>((set, get) => ({
  sendFeedback: async (data) => {
    try {
      const url = `/api/v1/feedback`;
      const response = await axiosClient.post(url, data);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Feedback sent successfully");
        return true;
      } else {
        toast.error("Error sending feedback");
        return null;
      }
    } catch (error) {
      toast.error("Error sending feedback");
      return null;
    }
  },
}));

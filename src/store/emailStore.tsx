import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosClient } from "@/utils/axiosClient";
import { SendEmailSchema } from "@/schema/emailSchema";

interface EmailStore {
  sendEmail: (data: SendEmailSchema) => Promise<boolean | null>;
}

export const useEmailStore = create<EmailStore>((set, get) => ({
  sendEmail: async (data) => {
    try {
      const url = `/api/v1/email/send`;
      const response = await axiosClient.post(url, data);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Email sent successfully");
        return true;
      } else {
        toast.error("Error sending email");
        return null;
      }
    } catch (error) {
      toast.error("Error sending email");
      return null;
    }
  },
}));

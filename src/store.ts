import { User } from "@prisma/client";
import { create } from "zustand";

type initialState = {
  page_loading: boolean;
  setPageLoading: (loading: boolean) => void;
  language: string;
  setCurrentLanguage: (language: string) => void;
  user: User | null;
  setUser: (user: User) => void;
};

const useAppStore = create<initialState>((set) => ({
  page_loading: false,
  setPageLoading: (loading: boolean) =>
    set((state) => ({ ...state, page_loading: loading })),
  language: "en",
  setCurrentLanguage: (language: string) =>
    set((state) => ({ ...state, language })),
  user: null,
  setUser: (user: User) => set((state) => ({ ...state, user }))
}));

/* const useFeedbackStore = create<initialState>((set) => ({
  page_loading: false,
  feedbacks: [],
  setPageLoading: (loading: boolean) =>
    set((state) => ({ ...state, page_loading: loading })),
  addFeedback: (feedback: Feedback) =>
    set((state) => ({
      ...state,
      feedbacks: [feedback, ...state.feedbacks],
    })),
  setFeedbackList: (feedbacks: Feedback[]) =>
    set((state) => ({ ...state, feedbacks })),
  deleteFeedback: (id: string) =>
    set((state) => ({
      ...state,
      feedbacks: state.feedbacks.filter((feedback) => feedback.id != id),
    })),
})); */

export default useAppStore;

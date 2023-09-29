/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from "@prisma/client";
import { create } from "zustand";
import { createJSONStorage, persist, StorageValue } from "zustand/middleware";

export type SurveyStateProps = {
  survey: any | null;
  user: User | null;
  setUser: (user: User) => void;
  setSurvey: (survey: any) => void;
  isNextDisabled: boolean;
  setIsNextDisabled: (value: boolean) => void;
};

export const initialSurveyState: StorageValue<SurveyStateProps> = {
  version: 0,
  state: {
    survey: null,
    user: null,
    setUser: () => {},
    setSurvey: () => {},
    isNextDisabled: false,
    setIsNextDisabled: () => {},
  },
};
const useSurveyStore = create<SurveyStateProps>()(
  persist(
    (set) => ({
      survey: null,
      isNextDisabled: false,
      setIsNextDisabled: (loading: boolean) =>
        set((state) => ({ ...state, isNextDisabled: loading })),

      user: null,
      setUser: (user: User) => set((state) => ({ ...state, user })),
      setSurvey: (survey: any) => set((state) => ({ ...state, survey })),
    }),
    {
      name: "survey-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useSurveyStore;

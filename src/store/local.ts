import { create } from "zustand";

interface IStore {
  hour: string;
  updateHour: (newHour: string) => void;
  localLenght: any[];
  updateLenght: (newOrigin: any[]) => void;
}

export const useLocalStore = create<IStore>((set) => ({
  hour: "",
  updateHour: (newHour: string) => {
    set({ hour: newHour });
  },
  localLenght: [],
  updateLenght: (newLenght: any[]) => {
    set({ localLenght: newLenght });
  },
}));

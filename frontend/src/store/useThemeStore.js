import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connectus-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("connectus-theme", theme);
    set({ theme });
  },
}));
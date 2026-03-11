import { create } from "zustand";

type UiState = {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
  openDrawer: () => void;
  toggleDrawer: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isDrawerOpen: false,
  closeDrawer: () => set({ isDrawerOpen: false }),
  openDrawer: () => set({ isDrawerOpen: true }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));

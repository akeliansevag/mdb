import { create } from "zustand";

interface ToggleState {
    isMenuOpen: any;
    isMenuSidebarOpen: boolean;
    toggleMenuSidebar: () => void;
    toggleMenu: () => void;
}

const useToggle = create<ToggleState>((set) => ({
    isMenuSidebarOpen: false,
    isMenuOpen: false,
    toggleMenuSidebar: () =>
        set((state) => ({
            isMenuSidebarOpen: !state.isMenuSidebarOpen,
        })),
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useToggle;

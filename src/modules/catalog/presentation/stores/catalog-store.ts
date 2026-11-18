import { create } from "zustand";
import { type CourseDetail } from "../course-catalog-content";

export type TabKey = "temukan" | "semua" | "favorit" | "belajar";

interface CatalogState {
  activeTab: TabKey;
  selectedCourse: CourseDetail | null;
  query: string;
  selectedLevels: string[];
  selectedCategories: string[];
  visibleCount: number;

  // Actions
  setActiveTab: (tab: TabKey) => void;
  setSelectedCourse: (course: CourseDetail | null) => void;
  setQuery: (query: string) => void;
  toggleLevel: (level: string) => void;
  toggleCategory: (category: string) => void;
  removeLevel: (level: string) => void;
  removeCategory: (category: string) => void;
  clearFilters: (pageSize: number) => void;
  setVisibleCount: (count: number) => void;
  incrementVisibleCount: (pageSize: number) => void;
  resetStore: () => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  activeTab: "temukan",
  selectedCourse: null,
  query: "",
  selectedLevels: [],
  selectedCategories: [],
  visibleCount: 9, // PAGE_SIZE default

  setActiveTab: (activeTab) => set({ activeTab }),
  setSelectedCourse: (selectedCourse) => set({ selectedCourse }),
  setQuery: (query) => set({ query }),

  toggleLevel: (level) =>
    set((state) => {
      const isSelected = state.selectedLevels.includes(level);
      const nextLevels = isSelected
        ? state.selectedLevels.filter((l) => l !== level)
        : [...state.selectedLevels, level];
      return { selectedLevels: nextLevels };
    }),

  toggleCategory: (category) =>
    set((state) => {
      const isSelected = state.selectedCategories.includes(category);
      const nextCategories = isSelected
        ? state.selectedCategories.filter((c) => c !== category)
        : [...state.selectedCategories, category];
      return { selectedCategories: nextCategories };
    }),

  removeLevel: (level) =>
    set((state) => ({
      selectedLevels: state.selectedLevels.filter((l) => l !== level),
    })),

  removeCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.filter((c) => c !== category),
    })),

  clearFilters: (pageSize) =>
    set({
      query: "",
      selectedLevels: [],
      selectedCategories: [],
      visibleCount: pageSize,
    }),

  setVisibleCount: (visibleCount) => set({ visibleCount }),

  incrementVisibleCount: (pageSize) =>
    set((state) => ({ visibleCount: state.visibleCount + pageSize })),

  resetStore: () =>
    set({
      activeTab: "temukan",
      selectedCourse: null,
      query: "",
      selectedLevels: [],
      selectedCategories: [],
      visibleCount: 9,
    }),
}));

import { Space } from "@/generated/prisma";
import { SpaceWithBlocks } from "@/types";
import { create } from "zustand";

interface Pin {
  id: string;
  title: string;
}

interface PinStore {
  pins: Pin[];
  setAllPins: (newPins: Pin[]) => void;
  addPin: (pin: Pin) => void;
  removePinById: (id: string) => void;
  clearAllPins: () => void;
  checkPinExists: (id: string) => boolean;
  updatePinTitle: (id: string, newTitle: string) => void;
}

interface SpaceStore {
  spaces: SpaceWithBlocks[];
  setSpaces: (spaces: SpaceWithBlocks[]) => void;
  getHomeSpace: () => SpaceWithBlocks | undefined;
  getSpaceById: (id: string) => SpaceWithBlocks | undefined;
  getSpaceBySlug: (slug: string) => SpaceWithBlocks | undefined;
  getAllSpaces: () => Space[];
}

const usePinStore = create<PinStore>((set, get) => ({
  pins: [],

  setAllPins: (newPins: Pin[]) => set({ pins: newPins }),

  addPin: (pin: Pin) =>
    set((state) => ({
      pins: [...state.pins, pin],
    })),

  removePinById: (id: string) =>
    set((state) => ({
      pins: state.pins.filter((p) => p.id !== id),
    })),

  clearAllPins: () => set({ pins: [] }),

  checkPinExists: (id: string) => {
    const { pins } = get();
    return pins.some((p) => p.id === id);
  },

  updatePinTitle: (id: string, newTitle: string) =>
    set((state) => ({
      pins: state.pins.map((p) =>
        p.id === id ? { ...p, title: newTitle } : p,
      ),
    })),
}));

const useSpaceStore = create<SpaceStore>((set, get) => ({
  spaces: [],

  setSpaces: (spaces) => set({ spaces }),

  getHomeSpace: () => {
    return get().spaces.find((s) => s.isHome);
  },

  getSpaceById: (id) => {
    return get().spaces.find((s) => s.id === id);
  },

  getSpaceBySlug: (slug) => {
    return get().spaces.find((s) => s.slug === slug);
  },

  getAllSpaces: () => {
    return get().spaces.map(({ ...spaceWithoutBlocks }) => spaceWithoutBlocks);
  },
}));

export { usePinStore, useSpaceStore };

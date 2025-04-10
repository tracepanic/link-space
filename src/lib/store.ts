import { create } from "zustand";

interface Pin {
  id: string;
  title: string;
}

interface PinState {
  pins: Pin[];
  setAllPins: (newPins: Pin[]) => void;
  addPin: (pin: Pin) => void;
  removePinById: (id: string) => void;
  clearAllPins: () => void;
  checkPinExists: (id: string) => boolean;
  updatePinTitle: (id: string, newTitle: string) => void;
}

const usePinStore = create<PinState>((set, get) => ({
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

export { usePinStore };

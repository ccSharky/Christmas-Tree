import { create } from 'zustand';
import { AppState } from './types';

export const useStore = create<AppState>((set) => ({
  phase: 'tree',
  gesture: 'None',
  cameraEnabled: false,
  userPhotos: [],
  setPhase: (phase) => set({ phase }),
  setGesture: (gesture) => set({ gesture }),
  setCameraEnabled: (enabled) => set({ cameraEnabled: enabled }),
  toggleCamera: () => set((state) => ({ cameraEnabled: !state.cameraEnabled })),
  addUserPhotos: (photos) => set((state) => ({ 
    // Combine new photos with existing, maybe limit total if needed, but for now just append or replace
    // Requirements imply "upload photos entry", let's prepend them so they show up first
    userPhotos: [...photos, ...state.userPhotos] 
  })),
}));
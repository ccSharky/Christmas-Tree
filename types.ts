export type Phase = 'tree' | 'blooming' | 'nebula' | 'collapsing';

export type GestureType = 'None' | 'Open_Palm' | 'Closed_Fist';

export interface AppState {
  phase: Phase;
  gesture: GestureType;
  cameraEnabled: boolean;
  userPhotos: string[];
  setPhase: (phase: Phase) => void;
  setGesture: (gesture: GestureType) => void;
  setCameraEnabled: (enabled: boolean) => void;
  toggleCamera: () => void;
  addUserPhotos: (photos: string[]) => void;
}

// Updated Palette: Silver White, Sky Blue, Highlight Gold, Burgundy, Grey Blue, Light Pink, Champagne
export const ORNAMENT_COLORS = [
  '#F5F5F5', // Silver White
  '#87CEEB', // Sky Blue
  '#FFD700', // Highlight Gold
  '#800020', // Burgundy
  '#778899', // Grey Blue
  '#FFB6C1', // Light Pink
  '#F7E7CE', // Champagne
];

export const PHOTO_URLS = Array.from({ length: 24 }).map((_, i) => 
  `https://picsum.photos/400/500?random=${i + 100}`
);

export type Shape = 
  | 'rounded-3xl' 
  | 'rounded-t-[3rem] rounded-b-2xl' 
  | 'rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl' 
  | 'rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl'
  | 'rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl';

export type ColorTheme = 'rose' | 'blue' | 'green' | 'yellow' | 'violet' | 'orange' | 'slate';

export interface Note {
  id: string;
  title: string;
  content: string; // HTML string
  folderId: string | null;
  color: ColorTheme;
  shape: Shape;
  icon: string;
  updatedAt: number;
}

export interface Folder {
  id: string;
  name: string;
  color: ColorTheme;
  shape: Shape;
}

export interface AppState {
  notes: Note[];
  folders: Folder[];
}
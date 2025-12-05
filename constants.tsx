
import React from 'react';
import { Shape, ColorTheme } from './types';
import { 
  FileText, Star, Heart, Zap, Coffee, Sun, Moon, Cloud, 
  Music, Camera, MapPin, Smile, Folder as FolderIcon
} from 'lucide-react';

export const LIGHT_COLORS: Record<ColorTheme, string> = {
  rose: 'bg-rose-200 text-rose-950 border-rose-300',
  blue: 'bg-blue-200 text-blue-950 border-blue-300',
  green: 'bg-emerald-200 text-emerald-950 border-emerald-300',
  yellow: 'bg-amber-200 text-amber-950 border-amber-300',
  violet: 'bg-violet-200 text-violet-950 border-violet-300',
  orange: 'bg-orange-200 text-orange-950 border-orange-300',
  slate: 'bg-slate-200 text-slate-950 border-slate-300',
};

export const DARK_COLORS: Record<ColorTheme, string> = {
  rose: 'bg-rose-900/40 text-rose-100 border-rose-800/50',
  blue: 'bg-blue-900/40 text-blue-100 border-blue-800/50',
  green: 'bg-emerald-900/40 text-emerald-100 border-emerald-800/50',
  yellow: 'bg-amber-900/40 text-amber-100 border-amber-800/50',
  violet: 'bg-violet-900/40 text-violet-100 border-violet-800/50',
  orange: 'bg-orange-900/40 text-orange-100 border-orange-800/50',
  slate: 'bg-slate-800/60 text-slate-200 border-slate-700/50',
};

export const SHAPES: Shape[] = [
  'rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl', // Asymmetric Pebble
  'rounded-t-[3rem] rounded-b-2xl', // Arch
  'rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl', // Leaf Right
  'rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl', // Leaf Left
];

export const ICONS: Record<string, React.ElementType> = {
  'file-text': FileText,
  'star': Star,
  'heart': Heart,
  'zap': Zap,
  'coffee': Coffee,
  'sun': Sun,
  'moon': Moon,
  'cloud': Cloud,
  'music': Music,
  'camera': Camera,
  'map-pin': MapPin,
  'smile': Smile,
  'folder': FolderIcon
};

// src\context\ThemeContext.tsx
import { createContext } from 'react';
import type { ThemeContextType } from '../types/index.types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
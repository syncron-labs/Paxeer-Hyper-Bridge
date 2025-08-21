import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Paxeer Bridge';
export const APP_DESCRIPTION = 'Paxeer HyperRoute Bridge';
export const APP_URL = 'localhost:3000';
export const BRAND_COLOR = '#35b7ff';
export const BACKGROUND_COLOR = '#000000';
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';

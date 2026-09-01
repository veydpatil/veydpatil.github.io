import type { Metadata } from 'next';
import { DM_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });
const dmMono = DM_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = { title: 'Veyd Patil | Engineering Portfolio', description: 'Engineering projects by Veyd Patil, from prototype to validation.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${spaceGrotesk.variable} ${dmMono.variable}`}>{children}</body></html>; }

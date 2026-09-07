import { Analytics } from '@vercel/analytics/next'
import { Maitree, Modak } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const display = Modak({ subsets: ['latin'], weight: '400', variable: '--font-display' })
const editorial = Maitree({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-editorial' })

export const metadata: Metadata = {
  title: 'Adelina — Product, UX, AI & Cybersecurity',
  description: 'Adelina makes things look good and thinks deeply about why they work.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${editorial.variable}`}>
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

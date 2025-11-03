import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Printify | Print for Figma - Professional PDF Export Plugin',
  description: 'Export professional print-ready PDFs directly from Figma with CMYK color conversion, bleed zones, crop marks, and spot color support.',
  keywords: ['Figma', 'plugin', 'print', 'PDF', 'CMYK', 'design', 'export'],
  openGraph: {
    title: 'Printify | Print for Figma',
    description: 'Professional print-ready PDF export for Figma',
    url: 'https://print-for-figma.com',
    siteName: 'Printify | Print for Figma',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

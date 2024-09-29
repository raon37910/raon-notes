import '@repo/ui/globals.css'
import './global.css'
import type { Metadata } from 'next'
import { Toaster } from '@repo/ui/components/ui/toaster'
import { ThemeProvider } from '~/layouts/theme/Provider'

export const metadata: Metadata = {
  title: 'Raon Notes',
  description: 'Raon Notes',
  icons: {
    icon: '/images/profile.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="ko">
      <body className="bg-[#f8f8f8] dark:bg-[#0A0A0B]">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}

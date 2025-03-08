import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import React from 'react'

export const metadata: Metadata = {
  title: 'Graphite',
  description: 'This is the home page'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

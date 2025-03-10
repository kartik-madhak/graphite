import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import React from 'react'
import Navbar from '@/components/custom/navbar'
import MainContentContainer from '@/components/custom/main-content-container'
import projectSettings from '@/project-settings.json'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: projectSettings.projectName,
  description: projectSettings.projectDescription
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <MainContentContainer>{children}</MainContentContainer>
        </Provider>
      </body>
    </html>
  )
}

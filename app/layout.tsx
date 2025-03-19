import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import React from 'react'
import Navbar from '@/components/custom/navbar'
import MainContentContainer from '@/components/custom/main-content-container'
import projectSettings from '@/project-settings.json'
import { Poppins } from 'next/font/google'
import { Center } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: projectSettings.projectName,
  description: projectSettings.projectDescription
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Provider>
          <Navbar />
          <MainContentContainer>
            <Center mt={5}>{children}</Center>
          </MainContentContainer>
        </Provider>
      </body>
    </html>
  )
}

import { Box, Text } from '@chakra-ui/react'
import LimitingContainer from './limiting-container'
import { ColorModeButton } from '@/components/ui/color-mode'
import projectSettings from '@/project-settings.json'
import Link from 'next/link'

const Navbar = () => {
  return (
    <LimitingContainer maxW={1600} as="header" bg="background">
      <Box
        py={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Link href="/">
            <Text fontWeight="bold" textStyle="xl">
              {projectSettings.projectName}
            </Text>
          </Link>
        </Box>
        <Box>
          <ColorModeButton colorPalette="primary" variant="ghost" />
        </Box>
      </Box>
    </LimitingContainer>
  )
}

export default Navbar

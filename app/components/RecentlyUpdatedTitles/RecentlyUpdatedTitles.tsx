import { ReactElement } from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import fetchTitles from '@/lib/home/fetchTitles'
import { Title } from './title'
import { TitleCard } from '@/app/components/RecentlyUpdatedTitles/TitleCard'

const RecentlyUpdatedTitles = async (): Promise<ReactElement> => {
  const titles: Title[] = await fetchTitles()

  if (titles.length === 0) {
    return (
      <Box mt={5} textAlign="center">
        <Heading fontSize="xl" color="gray.500">
          No titles found
        </Heading>
      </Box>
    )
  }

  return (
    <Box mt={5}>
      <Heading fontWeight="extrabold" textStyle="responsiveHeading">
        Recently Updated
      </Heading>
      <SimpleGrid
        columns={{
          base: 2,
          md: 3,
          '2xl': 5
        }}
        mt={7}
        gap={{ base: 3, sm: 10 }}
      >
        {titles.map((title) => (
          <TitleCard key={title.id} title={title} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default RecentlyUpdatedTitles

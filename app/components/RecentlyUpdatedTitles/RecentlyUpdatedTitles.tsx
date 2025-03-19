import { ReactElement } from 'react'
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import fetchTitles from '@/lib/home/fetchTitles'
import { Title } from './title'
import { TitleCard } from '@/app/components/RecentlyUpdatedTitles/TitleCard'

const RecentlyUpdatedTitles = async (): Promise<ReactElement> => {
  const titles: Title[] = await fetchTitles()

  if (!titles.length) {
    return <Spinner size="xl" />
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

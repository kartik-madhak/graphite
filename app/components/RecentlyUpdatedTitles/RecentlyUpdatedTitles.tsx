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
    <Box>
      <Heading fontWeight="extrabold" textStyle="2xl">
        Recently Updated
      </Heading>
      <SimpleGrid columns={[1, 2, 5]} mt={7} gap={10}>
        {titles.map((title) => (
          <TitleCard key={title.id} title={title} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default RecentlyUpdatedTitles

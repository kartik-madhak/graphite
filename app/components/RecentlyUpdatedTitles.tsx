import { ReactElement } from 'react'
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack
} from '@chakra-ui/react'
import NextImage from 'next/image'
import fetchTitles from '@/lib/home/fetchTitles'
import { Title } from '@prisma/client'

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

const TitleCard = ({ title }: { title: Title }) => (
  <Box>
    <Image
      asChild
      width={200 * 1.2}
      height={300 * 1.2}
      alt={title.name}
      borderRadius="lg"
    >
      <NextImage
        src={title.cover_image_url}
        alt={title.name}
        width={200}
        height={400}
      />
    </Image>
    <VStack align="start" mt="4">
      <Text fontWeight="bold" fontSize="xl">
        {title.name}
      </Text>
    </VStack>
  </Box>
)

export default RecentlyUpdatedTitles

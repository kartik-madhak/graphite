import { ReactElement } from 'react'
import {
  Box,
  Heading,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Spinner,
  Text,
  VStack
} from '@chakra-ui/react'
import NextImage from 'next/image'
import fetchTitles from '@/lib/home/fetchTitles'
import { Prisma } from '@prisma/client'
import Link from 'next/link'

type Title = Prisma.TitleGetPayload<{
  include: {
    Chapter: {
      select: {
        id: true
        name: true
        index: true
      }
    }
  }
}>

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
      <ChakraLink asChild mb={2}>
        <Link href={`/title/${title.id}`} passHref>
          <Text fontWeight="bold" fontSize="xl" lineClamp={1}>
            {title.name.charAt(0).toUpperCase() + title.name.slice(1)}
          </Text>
        </Link>
      </ChakraLink>
      {title.Chapter.map(
        (chapter) =>
          chapter.name && (
            <ChakraLink asChild key={chapter.id}>
              <Link href={`/title/${title.id}/chapter/${chapter.id}`} passHref>
                <Text fontSize="sm" lineClamp={1}>
                  Chapter {chapter.index + 1}: {chapter.name}
                </Text>
              </Link>
            </ChakraLink>
          )
      )}
    </VStack>
  </Box>
)

export default RecentlyUpdatedTitles

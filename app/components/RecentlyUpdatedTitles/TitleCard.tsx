import { Title } from '@/app/components/RecentlyUpdatedTitles/title'
import { Box, Image, Link as ChakraLink, Text, VStack } from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'

export const TitleCard = ({ title }: { title: Title }) => (
  <Box>
    <Link href={`/title/${title.id}`} passHref>
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
    </Link>
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

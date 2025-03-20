import { Title, Chapter } from '@/app/components/RecentlyUpdatedTitles/title'
import { Box, Image, Link as ChakraLink, Text, VStack } from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'

export const TitleCard = ({ title }: { title: Title }) => (
  <Box width={{ base: 'unset', sm: 240 }} mt={{ base: 2, sm: 0 }}>
    <Link href={`/title/${title.id}`} passHref>
      <Image
        asChild
        width={{ base: 'max-content', sm: 240 }}
        height={{ base: 'max-content', sm: 360 }}
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
    <VStack align="start" mt={{ base: 1, sm: 4 }}>
      <ChakraLink asChild mb={{ base: 0, sm: 2 }}>
        <Link href={`/title/${title.id}`} passHref>
          <Text
            fontWeight="bold"
            textStyle="responsiveSubHeading"
            lineClamp={{ base: 2, sm: 1 }}
          >
            {title.name.charAt(0).toUpperCase() + title.name.slice(1)}
          </Text>
        </Link>
      </ChakraLink>
      <Box
        display={{
          base: 'none',
          sm: 'block'
        }}
      >
        {title.Chapter.map(
          (chapter: Chapter) =>
            chapter.name && (
              <ChakraLink asChild key={chapter.id}>
                <Link
                  href={`/title/${title.id}/chapter/${chapter.id}`}
                  passHref
                >
                  <Text fontSize="sm" textStyle="responsiveText" lineClamp={1}>
                    Chapter {chapter.index + 1}: {chapter.name}
                  </Text>
                </Link>
              </ChakraLink>
            )
        )}
      </Box>
    </VStack>
  </Box>
)

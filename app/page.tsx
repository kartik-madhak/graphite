import { Box, Heading, Text } from '@chakra-ui/react'
import fetchTitles from '@/lib/home/fetchTitles'

const Home = async () => {
  const titles = await fetchTitles()

  return (
    <Box>
      {titles.map((title) => (
        <Box key={title.id}>
          <Heading size="md">{title.name}</Heading>
          <Text>{title.description}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Home

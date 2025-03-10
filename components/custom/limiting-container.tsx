import { Container, Center } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
  as: 'header' | 'main' | 'footer'
  bg?: string
}

const LimitingContainer = (props: Props) => {
  return (
    <Container fluid as={props.as} bg={props.bg}>
      <Center>
        <Container maxW="container.lg">{props.children}</Container>
      </Center>
    </Container>
  )
}

export default LimitingContainer

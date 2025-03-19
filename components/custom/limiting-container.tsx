import { Center, Container } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
  as: 'header' | 'main' | 'footer'
  bg?: string
  maxW?: string | number
}

const LimitingContainer = (props: Props) => {
  return (
    <Container fluid as={props.as} bg={props.bg}>
      <Center>
        <Container maxW={props.maxW || '8xl'}>{props.children}</Container>
      </Center>
    </Container>
  )
}

export default LimitingContainer

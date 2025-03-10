import LimitingContainer from "./limiting-container"

interface Props {
  children: React.ReactNode
}

const MainContentContainer = (props: Props) => {
  return (
    <LimitingContainer as="main">
      {props.children}
    </LimitingContainer>
  )
}

export default MainContentContainer